'use strict';

import Twitter from 'twit';
import dec from 'bignum-dec';
import { merge, pipe, prop, last, concat, isEmpty } from 'ramda';

const defaults = {
    count: 200,
    trim_user: true,
    include_rts: true,
    exclude_replies: false,
    tweet_mode: 'extended',
};

function getNextOptions(options, tweets) {
  return (isEmpty(tweets))
    ? options
    : merge(options, { max_id: pipe(last, prop('id_str'), dec)(tweets) });
}

function accumulate(client, options, tweets) {
  const nextOptions = getNextOptions(options, tweets);
  return client.get('statuses/user_timeline', nextOptions).then(({ data }) => {
    const accumulatedTweets = concat(tweets, data);
    return (isEmpty(data))
      ? accumulatedTweets
      : accumulate(client, nextOptions, accumulatedTweets);
  });
}

export default function getTweets(tokens, username, sinceId) {
  const client = new Twitter(tokens);
  const options = merge(defaults, { screen_name: username, since_id: sinceId });
  return accumulate(client, options, []);
}