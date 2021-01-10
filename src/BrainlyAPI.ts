import Configurable from './configurable';

class BrainlyAPI {
    static VERSION = require('./../package.json').version;

    static async startWorker(
        config: Configurable.BrainlyWorker | Configurable.StarterConfig,
        worker?: Configurable.BrainlyWorker
    ): Promise<any> {

    }
}

export default BrainlyAPI;