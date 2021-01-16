import axios from 'axios';
import Configurable from '../configurable';
import ServerInformation from '../contracts/ServerInformation';

class AnonymousHttp {
    private _serverInformation: ServerInformation;

    constructor(server: ServerInformation) {
        this._serverInformation = server;
    }

    requestCommonApi<T extends keyof Configurable.ApiPath.Anonymous>(apiType: T, config: any) {
        let action;

        try {
            // Memuat library secara dinamis
            action = require('./actions/' + apiType).default;
        } catch (error) {
            return false;
        }

        return action(this._serverInformation, config);
    }
}

export default AnonymousHttp;