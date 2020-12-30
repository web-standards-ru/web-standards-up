import fs from 'fs-extra';
import events from './events';
import renderTweet from 'tweet.md';

const log = console.log.bind(null);
const getMedia = (tweet) => tweet.extended_entities !== undefined ? tweet.extended_entities.media : [];
const extractImages = (tweet) => getMedia(tweet)
    .map(item => item['media_url_https'])
    .map(url => `![](${url})`)
    .join('\n\n');
const render = (tweet) => tweet.entities.media !== undefined ? [].concat(renderTweet(tweet), extractImages(tweet)).join('\n\n') :
    renderTweet(tweet);

function generate(event) {
    const dump = fs.readJsonSync(`./dump/${event.date}_${event.shortName}.json`, {throws: false}) || {};

    dump.tweets.reverse();

    const md = [
        `# ${event.fullName}`,
        `## ${event.date}, ${event.location}`,
        dump.tweets
            .map(render)
            .join('\n\n')
    ].filter(x => x).join('\n\n');

    fs.outputFile(`./${event.date}_${event.shortName}.md`, md, err => log(`${event.shortName} done`));
}

if (process.argv.indexOf('--force') !== -1) {
    events.forEach(generate)
} else {
    generate(events[0])
}
