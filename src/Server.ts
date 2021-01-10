import ServerInformation from './utils/ServerInformation';

namespace Server {
    export const PL: ServerInformation = ServerInformation.create('PL', 'Poland', {});
    export const RU: ServerInformation = ServerInformation.create('RU', 'Russian Federation (the)', {});
    export const ES: ServerInformation = ServerInformation.create('ES', 'Spain', {});
    export const PT: ServerInformation = ServerInformation.create('PT', 'Portugal', {});
    export const TR: ServerInformation = ServerInformation.create('TR', 'Turkey', {});
    export const RO: ServerInformation = ServerInformation.create('RO', 'Romania', {});
    export const ID: ServerInformation = ServerInformation.create('ID', 'Indonesia', {});
    export const HI: ServerInformation = ServerInformation.create('HI', 'India', {});
    export const PH: ServerInformation = ServerInformation.create('PH', 'Philipines (the)', {});
    export const US: ServerInformation = ServerInformation.create('US', 'United States of America (the)', {});
}

export default Server;