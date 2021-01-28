function randomUserAgent(): string {
    let userAgent: string = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1';

    try {
        userAgent = require('random-useragent').getRandom();
    } catch (loadError) {
        if (loadError.code !== 'MODULE_NOT_FOUND') {
            throw loadError;
        }
    }

    return userAgent;
}

export default randomUserAgent;