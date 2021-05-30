import AnonymousWorker from './workers/AnonymousWorker';
import AuthWorker from './workers/AuthWorker';

namespace Configurable {
    export type BrainlyWorker = (worker: AnonymousWorker | AuthWorker) => any;

    export type LessonItem = number;

    export interface ServerInformation<TSubjects = {}> {
        Url: string,
        Code: string,
        Name: string,
        Subjects: TSubjects
    }

    export interface StarterConfig {
        auth?: boolean,
        server?: ServerInformation,
        experimental?: boolean
    }

    export namespace ApiPath {
        export type Anonymous = {
            FindQuestion: string,
            FindQuestionHighlight: string,
            FindQuestionById: string,
            FetchUserProfile: string
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