import Worker from '../contracts/Worker';
import QuestionDetail from '../wrappers/QuestionDetail';

class AuthWorker implements Worker {
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