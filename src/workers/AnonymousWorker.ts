import Server from '../Server';
import Worker from '../contracts/Worker';
import ServerInformation from '../contracts/ServerInformation';
import QuestionDetail from '../wrappers/QuestionDetail';

class AnonymousWorker implements Worker {
    constructor(server: ServerInformation = Server.US) {

    }

    async findQuestion(question: string): Promise<any> {

    }

    async getQuestionById(id: string): Promise<QuestionDetail> {
        return new QuestionDetail();
    }
}

export default AnonymousWorker;