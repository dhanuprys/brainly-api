import Subjects from './Subjects';
import ServerInformation from './utils/ServerInformation';

namespace Server {
    export const PL = ServerInformation.create('https://brainly.pl', 'PL', 'Poland', Subjects.PL);
    export const RU = ServerInformation.create('https://znanija.com', 'RU', 'Russian Federation (the)', Subjects.RU);
    export const ES = ServerInformation.create('https://brainly.lat', 'ES', 'Spain', Subjects.ES);
    export const PT = ServerInformation.create('https://brainly.com.br', 'PT', 'Portugal', Subjects.PT);
    export const TR = ServerInformation.create('https://eodev.com', 'TR', 'Turkey', Subjects.TR);
    export const RO = ServerInformation.create('https://brainly.ro', 'RO', 'Romania', Subjects.RO);
    export const ID = ServerInformation.create('https://brainly.co.id', 'ID', 'Indonesia', Subjects.ID);
    export const HI = ServerInformation.create('https://brainly.in', 'HI', 'India', Subjects.HI);
    export const PH = ServerInformation.create('https://brainly.ph', 'PH', 'Philipines (the)', Subjects.PH);
    export const US = ServerInformation.create('https://brainly.com', 'US', 'United States of America (the)', Subjects.US);
}

export default Server;