import fs from 'fs-extra';
import getTweets from 'get-tweets';
import tokens from 'twitter-tokens';
import events from './events';

const log = console.log.bind(null);
const currentEvent = events[0];

getTweets(tokens, 'webstandards_up', currentEvent.firstTweetId, (err, tweets, missed, info) => {
    "use strict";

    if (err) {
        throw err;
    }

    currentEvent.tweets = tweets;
    fs.outputJson(`./dump/${currentEvent.date}_${currentEvent.shortName}.json`, currentEvent, err =>
        log(`${currentEvent.shortName} done`));
});
