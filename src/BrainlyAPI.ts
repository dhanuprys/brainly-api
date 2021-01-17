import Configurable from './configurable';
import Server from './Server';
import AnonymousWorker from './workers/AnonymousWorker';
import AuthWorker from './workers/AuthWorker';

class BrainlyAPI {
    static VERSION: string = require('./../package.json').version;

    /**
     * Start worker adalah metode yang digunakan sebagai pembungkus
     * pekerjaan
     */
    static async startWorker(
        config: Configurable.BrainlyWorker | Configurable.StarterConfig,
        worker?: Configurable.BrainlyWorker
    ): Promise<Promise<any>> {
        // EXPERIMENTAL
        let experimentalError: () => void = () => {
            throw new Error('Experimental Error. Please pass "experimental" property to the config parameter')
        };

        // Konfigurasi-konfigurasi default
        const defaultConfig: Configurable.StarterConfig = {
            auth: false,
            server: Server.US,
            experimental: false
        };

        // Jika parameter pertama "config", diisi dengan data bertipe "function"
        // maka program akan menganggapnya tidak memiliki konfigurasi
        if (typeof config === 'function') {
            // EXPERIMENTAL
            experimentalError();

            worker = config as Configurable.BrainlyWorker;

            // end method process
            return await worker(
                new AnonymousWorker(defaultConfig.server)
            );
        }

        // jika kedua parameter diisi dengan data yang valid maka 
        // program akan memanggil fungsi callback
        if (typeof config === 'object' && typeof worker === 'function') {
            config = Object.assign(defaultConfig, config);

            // EXPERIMENTAL
            if (!config.experimental) {
                experimentalError();
            }

            // Jika parameter konfigurasi memiliki properti "auth" maka fungsi callback
            // akan dipanggil, kemudian parameter pertama akan diisi dengan objek dari kelas
            // AuthWorker
            if (config.auth === true) {
                return await worker(
                    new AuthWorker(config.server)
                );
            }
            
            // Jika tidak kondisi yang tepat dari logika di atas maka program akan memanggil
            // fungsi callback dan melawatkan parameter-parameter default
            return await worker(
                new AnonymousWorker(config.server)
            );
        }

        // Default return
        return null;
    }
}

export default BrainlyAPI;