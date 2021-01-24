import ServerInformation from './contracts/ServerInformation';
import AnonymousWorker from './workers/AnonymousWorker';
import AuthWorker from './workers/AuthWorker';

namespace Configurable {
    export type BrainlyWorker = (worker: AnonymousWorker | AuthWorker) => any;

    export type LessonItem = number;

    export interface StarterConfig {
        auth?: boolean,
        server?: ServerInformation,
        experimental?: boolean
    }

    export namespace ApiPath {
        export type Anonymous = {
            FindQuestion: string,
            GetQuestionHighLight: string,
            GetQuestionById: string
        };

        export type Auth = Anonymous & {
            Login: string,
            Signup: string,
            AskQuestion: string
        };
    }

    export type GraphqlQuery = {
        operationName: string,
        variables: any,
        query: string
    };

    export type GraphqlQueryArray = GraphqlQuery[];
}

export default Configurable;