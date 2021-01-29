function safeRequire<TReturn>(packageName: string, defaultReturn: any = null): TReturn {
    let packageLoader: any;

    try {
        packageLoader = require(packageName);
    } catch (loadError) {
        if (loadError.code === 'MODULE_NOT_FOUND') {
            return defaultReturn;
        }

        throw loadError;
    }

    // typescript pacakge load
    return packageLoader.default === undefined 
            ? packageLoader
            : packageLoader.default;
}

export default safeRequire;