import Configurable from './configurable';
import Server from './Server';
import AnonymousWorker from './workers/AnonymousWorker';
import AuthWorker from './workers/AuthWorker';

class BrainlyAPI {
    static VERSION = require('./../package.json').version;

    static async startWorker(
        config: Configurable.BrainlyWorker | Configurable.StarterConfig,
        worker?: Configurable.BrainlyWorker
    ): Promise<Promise<any>> {
        const defaultConfig: Configurable.StarterConfig = {
            auth: false,
            server: Server.US
        };

        if (typeof config === 'function') {
            worker = config as Configurable.BrainlyWorker;

            // end method process
            return await worker(
                new AnonymousWorker(defaultConfig.server)
            );
        }

        // jika kedua parameter diisi dengan data yang valid maka 
        // program akan memanggil fungsi callback
        if (typeof config === 'object' && typeof worker === 'function') {
            Object.assign(config, defaultConfig);

            if (config.auth === true) {
                return await worker(
                    new AuthWorker(config.server)
                );
            }

            return await worker(
                new AnonymousWorker(config.server)
            );
        }

        return null;
    }
}

export default BrainlyAPI;