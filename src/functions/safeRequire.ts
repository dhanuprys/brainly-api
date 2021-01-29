function safeRequire<TReturn>(packageName: string, defaultReturn: any = null): TReturn {
    let packageLoader: any;

    try {
        packageLoader = require(packageName);
    } catch (loadError) {
        return defaultReturn;
    }

    // typescript pacakge load
    return packageLoader.default === undefined 
            ? packageLoader
            : packageLoader.default;
}

export default safeRequire;