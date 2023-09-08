import crawlersList from 'crawler-user-agents';

type Cache = {
  [key: string]: boolean;
}

interface CrawlerInfo {
    pattern: string;
    instances: string[];
}

export class WebCrawlerService {

    private cache: Cache = {};

    public isCrawlerUserAgent(topCrawlersToCheck?: number): boolean {
        const cacheKey = `${topCrawlersToCheck || ''}`;
        if (cacheKey in this.cache) {
            return this.cache[cacheKey];
        }
        return this.isCrawler(window.navigator.userAgent, topCrawlersToCheck);
    }

    public isCrawler(userAgent: string, topCrawlersToCheck?: number): boolean {
        return Boolean(this.getCrawler(userAgent, topCrawlersToCheck));
    }

    private getCrawler(userAgent: string, max?: number): CrawlerInfo | null {
        const len = max ? Math.min(crawlersList.length, max) : crawlersList.length;
        for (let i=0; i < len; i++) {
            const entry = crawlersList[i] as CrawlerInfo;
            if (RegExp(entry.pattern).test(userAgent)) {
                return entry;
            }
        }
        return null;
    }

}
