import axios from 'axios';
import Configurable from '../configurable';

class AnonymousHttp {
    private _serverInformation: Configurable.ServerInformation;

    constructor(server: Configurable.ServerInformation) {
        this._serverInformation = server;
    }

    requestCommonApi<TReturn, T extends keyof Configurable.ApiPath.Anonymous>(apiType: T, config: any): TReturn {
        let action;
        let loadAction = (actionName: T) => require('./actions/' + actionName).default;

        try {
            // Memuat library secara dinamis
            action = loadAction(apiType);
        } catch (error) {
            throw new Error('Action module not found');
        }

        return action(axios, this._serverInformation, config);
    }
}

export default AnonymousHttp;