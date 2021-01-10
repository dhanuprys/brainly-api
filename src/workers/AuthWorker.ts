import Server from '../Server';
import Worker from '../contracts/Worker';
import ServerInformation from '../contracts/ServerInformation';
import QuestionDetail from '../wrappers/QuestionDetail';

class AuthWorker implements Worker {
    constructor(server: ServerInformation = Server.US) {

    }

    async findQuestion(question: string): Promise<any> {

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