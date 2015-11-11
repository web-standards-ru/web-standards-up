import fs from 'fs-extra';
import events from './events';
import urlRegexp from 'twitter-regexps/url';
import renderTweet from 'tweet.md';

const log = console.log.bind(null);
const currentEvent = events[0];
const extractImages = (tweet) => tweet.entities.media
    .map(item => item['media_url_https'])
    .map(url => `![](${url})`)
    .join('\n\n');
const render = (tweet) => tweet.entities.media !== undefined ? [renderTweet(tweet), extractImages(tweet)].join('\n\n') :
    renderTweet(tweet);

const dump = fs.readJsonSync(`./dump/${currentEvent.date}_${currentEvent.shortName}.json`, {throws: false}) || {};

dump.tweets.reverse();

const md = [
    `# ${currentEvent.fullName}`,
    `## ${currentEvent.date}, ${currentEvent.location}`,
    dump.tweets
        .map(render)
        .join('\n\n')
].filter(x => x).join('\n\n');

fs.outputFile(`./${currentEvent.date}_${currentEvent.shortName}.md`, md, err => console.log(`${currentEvent.shortName} done`));
