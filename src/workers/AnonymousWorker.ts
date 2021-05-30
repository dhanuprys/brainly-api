import Server from '../Server';
import Configurable from '../configurable';
import Worker from '../contracts/Worker';
import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';
import AnonymousHttp from '../clients/AnonymousHttp';
import UserProfile from '../wrappers/UserProfile';
import WithCurrentServer from '../contracts/WithCurrentServer';

class AnonymousWorker implements Worker, WithCurrentServer {
    readonly currentServer: Configurable.ServerInformation;
    private _client: AnonymousHttp;

    constructor(server: Configurable.ServerInformation = Server.US) {
        this.currentServer = server;
        this._client = new AnonymousHttp(server);
    }

    async findQuestion(question: string): Promise<QuestionResults> {
        return await this._client.requestCommonApi('FindQuestion', { question: question });
    }

    async findQuestionHighlight(lesson: Configurable.LessonItem): Promise<QuestionResults> {
        return await this._client.requestCommonApi('FindQuestionHighlight', {
            lesson: lesson
        });
    }

    async findQuestionById(id: string): Promise<QuestionDetail> {
        return await this._client.requestCommonApi('FindQuestionById', {
            id: id
        });
    }

    async fetchUserProfile(userId: string): Promise<UserProfile> {
        return await this._client.requestCommonApi('FetchUserProfile', {
            userId: userId
        });
    }
}

export default AnonymousWorker;