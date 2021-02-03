import Configurable from '../configurable';

interface WithCurrentServer {
    readonly currentServer: Configurable.ServerInformation;
}

export default WithCurrentServer;