import { WebCrawlerService } from './web-crawler-service';

const singleton = new WebCrawlerService();

export const isCrawlerUserAgent = (topCrawlersToCheck?: number): boolean => {
    return singleton.isCrawlerUserAgent(topCrawlersToCheck);
}

export const isCrawler = (userAgent: string, topCrawlersToCheck?: number): boolean => {
    return singleton.isCrawler(userAgent, topCrawlersToCheck);
}
