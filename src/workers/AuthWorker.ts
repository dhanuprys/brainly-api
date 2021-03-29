import Server from '../Server';
import VirtualBrowser from '../utils/VirtualBrowser';
import Worker from '../contracts/Worker';
import Configurable from '../configurable';
import WithCurrentServer from '../contracts/WithCurrentServer';

class AuthWorker implements WithCurrentServer {
    readonly currentServer: Configurable.ServerInformation;
    private _browser;

    constructor(server: Configurable.ServerInformation = Server.US) {
        this.currentServer = server;
        this._browser = new VirtualBrowser();
    }

    async signin(email: string, password: string) {
        throw new Error('On development');
    }

    async signup(email: string, password: string, countryById: string, birthday: [string, string, string]) {
        await this._browser.launch();
        throw new Error('On development');
        //await this._browser.signup(email, password, countryById, birthday);
    }
}

export default AuthWorker;