import AnonymousWorker from './workers/AnonymousWorker';
import AuthWorker from './workers/AuthWorker';

namespace Configurable {
    export type BrainlyWorker = (worker: AnonymousWorker | AuthWorker) => any;

    export interface StarterConfig {
        auth?: boolean,
        server?: any
    }
}

export default Configurable;