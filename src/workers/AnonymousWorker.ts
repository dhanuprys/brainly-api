import Server from '../Server';
import Configurable from '../configurable';
import Worker from '../contracts/Worker';
import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';
import AnonymousHttp from '../clients/AnonymousHttp';

class AnonymousWorker implements Worker {
    private _client: AnonymousHttp;

    constructor(server: Configurable.ServerInformation = Server.US) {
        this._client = new AnonymousHttp(server);
    }

    async findQuestion(question: string): Promise<any> {
        return await this._client.requestCommonApi('FindQuestion', { question: question });
    }

    async getQuestionHighlight(question: string, lesson: Configurable.LessonItem): Promise<QuestionResults> {
        return await this._client.requestCommonApi('GetQuestionHighLight', {
            question: question,
            lesson: lesson
        });
    }

    async getQuestionById(id: string): Promise<QuestionDetail> {
        return await this._client.requestCommonApi('GetQuestionById', {
            id: id
        });
    }
}

export default AnonymousWorker;