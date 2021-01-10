import ServerInformation from './contracts/ServerInformation';
import AnonymousWorker from './workers/AnonymousWorker';
import AuthWorker from './workers/AuthWorker';

namespace Configurable {
    export type BrainlyWorker = (worker: AnonymousWorker | AuthWorker) => any;

    export interface StarterConfig {
        auth?: boolean,
        server?: ServerInformation
    }
}

export default Configurable;