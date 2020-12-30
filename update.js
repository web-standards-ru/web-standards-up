import fs from 'fs-extra';
import getTweets from './getTweets';
import tokens from 'twitter-tokens';
import events from './events';

const log = console.log.bind(null);

function generateDump(event) {
    getTweets(tokens, 'webstandards_up', event.firstTweetId)
        .then(tweets => {
            "use strict";
            event.tweets = tweets;
            if (event.lastTweetId) {
                event.tweets = tweets.filter((tweet) => tweet.id <= event.lastTweetId);
            }

            fs.outputJson(`./dump/${event.date}_${event.shortName}.json`, event, err =>
                log(`${event.shortName} done`));
        })
        .catch(err => {
            throw err;
        });
}

if (process.argv.indexOf('--force') !== -1) {
    events.forEach(generateDump)
} else {
    generateDump(events[0])
}
