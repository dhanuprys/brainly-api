import ServerInformation from './utils/ServerInformation';
import { default as ServerInformationContract } from './contracts/ServerInformation';

namespace Server {
    export const PL: ServerInformationContract = ServerInformation.create('PL', 'Poland', {});
    export const RU: ServerInformationContract = ServerInformation.create('RU', 'Russian Federation (the)', {});
    export const ES: ServerInformationContract = ServerInformation.create('ES', 'Spain', {});
    export const PT: ServerInformationContract = ServerInformation.create('PT', 'Portugal', {});
    export const TR: ServerInformationContract = ServerInformation.create('TR', 'Turkey', {});
    export const RO: ServerInformationContract = ServerInformation.create('RO', 'Romania', {});
    export const ID: ServerInformationContract = ServerInformation.create('ID', 'Indonesia', {});
    export const HI: ServerInformationContract = ServerInformation.create('HI', 'India', {});
    export const PH: ServerInformationContract = ServerInformation.create('PH', 'Philipines (the)', {});
    export const US: ServerInformationContract = ServerInformation.create('US', 'United States of America (the)', {});
}

export default Server;