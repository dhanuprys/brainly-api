import Lessons from './Lessons';
import ServerInformation from './utils/ServerInformation';

namespace Server {
    export const PL = ServerInformation.create('https://brainly.pl', 'PL', 'Poland', Lessons.PL);
    export const RU = ServerInformation.create('https://znanija.com', 'RU', 'Russian Federation (the)', Lessons.RU);
    export const ES = ServerInformation.create('https://brainly.lat', 'ES', 'Spain', Lessons.ES);
    export const PT = ServerInformation.create('https://brainly.com.br', 'PT', 'Portugal', Lessons.PT);
    export const TR = ServerInformation.create('https://eodev.com', 'TR', 'Turkey', Lessons.TR);
    export const RO = ServerInformation.create('https://brainly.ro', 'RO', 'Romania', Lessons.RO);
    export const ID = ServerInformation.create('https://brainly.co.id', 'ID', 'Indonesia', Lessons.ID);
    export const HI = ServerInformation.create('https://brainly.in', 'HI', 'India', Lessons.HI);
    export const PH = ServerInformation.create('https://brainly.ph', 'PH', 'Philipines (the)', Lessons.PH);
    export const US = ServerInformation.create('https://brainly.com', 'US', 'United States of America (the)', Lessons.US);
}

export default Server;