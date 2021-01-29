import safeRequire from './safeRequire';

function randomUserAgent(): string {
    let userAgent: string = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1';
    const randomUserAgent: any = safeRequire<any>('random-useragent');

    if (randomUserAgent !== null) {
        userAgent = randomUserAgent.getRandom();
    }

    return userAgent;
}

export default randomUserAgent;