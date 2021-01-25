import Server from '../Server';
import Worker from '../contracts/Worker';
import Configurable from '../configurable';
import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';

class AuthWorker implements Worker {
    constructor(server: Configurable.ServerInformation = Server.US) {

    }

    async findQuestion(question: string): Promise<any> {

    }

    async getQuestionHighlight(question: string, category: number): Promise<QuestionResults> {
        return new QuestionResults();
    }

    async getQuestionById(id: string): Promise<QuestionDetail> {
        return new QuestionDetail();
    }

    async login(email: string, password: string) {

    }

    async signup(email: string, password: string, country: string, birthday: string) {

    }
}

export default AuthWorker;