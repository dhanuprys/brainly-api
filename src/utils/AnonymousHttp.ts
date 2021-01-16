import axios from 'axios';
import ServerInformation from '../contracts/ServerInformation';

class AnonymousHttp {
    private _serverInformation: ServerInformation;

    constructor(server: ServerInformation) {
        this._serverInformation = server;
    }

    requestCommonApi() {
        
    }
}

export default AnonymousHttp;