import Lessons from './Lessons';
import ServerInformation from './utils/ServerInformation';
import { default as ServerInformationContract } from './contracts/ServerInformation';

namespace Server {
    export const PL: ServerInformationContract = ServerInformation.create('PL', 'Poland', Lessons.PL);
    export const RU: ServerInformationContract = ServerInformation.create('RU', 'Russian Federation (the)', Lessons.RU);
    export const ES: ServerInformationContract = ServerInformation.create('ES', 'Spain', Lessons.ES);
    export const PT: ServerInformationContract = ServerInformation.create('PT', 'Portugal', Lessons.PT);
    export const TR: ServerInformationContract = ServerInformation.create('TR', 'Turkey', Lessons.TR);
    export const RO: ServerInformationContract = ServerInformation.create('RO', 'Romania', Lessons.RO);
    export const ID: ServerInformationContract = ServerInformation.create('ID', 'Indonesia', Lessons.ID);
    export const HI: ServerInformationContract = ServerInformation.create('HI', 'India', Lessons.HI);
    export const PH: ServerInformationContract = ServerInformation.create('PH', 'Philipines (the)', Lessons.PH);
    export const US: ServerInformationContract = ServerInformation.create('US', 'United States of America (the)', Lessons.US);
}

export default Server;