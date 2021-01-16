import Server from '../Server';
import Worker from '../contracts/Worker';
import ServerInformation from '../contracts/ServerInformation';
import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';
import AnonymousHttp from '../clients/AnonymousHttp';

class AnonymousWorker implements Worker {
    private _client: AnonymousHttp;

    constructor(server: ServerInformation = Server.US) {
        this._client = new AnonymousHttp(server);
    }

    async findQuestion(question: string): Promise<any> {
        return await this._client.requestCommonApi('FindQuestion', { question: question });
    }

    async getQuestionHighlight(question: string, category: number): Promise<QuestionResults> {
        return await this._client.requestCommonApi('GetQuestionHighLight', {
            question: question,
            category: category
        });
    }

    async getQuestionById(id: string): Promise<QuestionDetail> {
        return await this._client.requestCommonApi('GetQuestionById', {
            id: id
        });
    }
}

export default AnonymousWorker;