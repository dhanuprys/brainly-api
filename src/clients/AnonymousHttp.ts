import axios from 'axios';
import Configurable from '../configurable';

class AnonymousHttp {
    private _serverInformation: Configurable.ServerInformation;

    constructor(server: Configurable.ServerInformation) {
        this._serverInformation = server;
    }

    requestCommonApi<T extends keyof Configurable.ApiPath.Anonymous>(apiType: T, config: any) {
        let action;
        let loadAction = (actionName: T) => require('./actions/' + actionName).default;

        try {
            // Memuat library secara dinamis
            action = loadAction(apiType);
        } catch (error) {
            return false;
        }

        return action(axios, this._serverInformation, config);
    }
}

export default AnonymousHttp;