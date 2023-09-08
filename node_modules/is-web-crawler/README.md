# is-web-crawler ![npm](https://img.shields.io/npm/v/is-web-crawler)

A javascript based library to check if the current user agent is a web crawler.
It uses the list of known web crawlers using the package [crawler-user-agents](https://www.npmjs.com/package/crawler-user-agents).

## Get started
```
npm install is-web-crawler
```

## Usage

### Quick Usage

If you want to know if the current user agent is a web crawler.

```
import { isCrawlerUserAgent } from 'is-web-crawler';

const isCurrentUserAgentABot = isCrawlerUserAgent();
```

NOTE: The regex pattern matching under the hood is cached, so calling this method multiple times will not affect performance.

### Only use the top X known crawlers

If you only want to tackle the top X web crawlers (from the list provided by [crawler-user-agents](https://www.npmjs.com/package/crawler-user-agents)), then simply pass in the number as an argument:

```
const topCrawlers = 10;
const isCurrentUserAgentABot = isCrawlerUserAgent(topCrawlers);
```

### Checking a custom user agent string

There might a scenario where you want to check a custom user agent string, instead of the current user agent. In this case, you can use the `isCrawler` method instead.

```
import { isCrawlerUserAgent } from 'is-web-crawler';

const myUserAgent = ... get user agent ...;
const topCrawlers = 10;

// the second argument is optional
const isCurrentUserAgentABot = isCrawler(myUserAgent, topCrawlers);

```
NOTE: This method by passes the caching, so it if you need to cache the value, you need to implement this in your application.
