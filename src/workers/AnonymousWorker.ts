import Worker from '../contracts/Worker';
import QuestionDetail from '../wrappers/QuestionDetail';

class AnonymousWorker implements Worker {
    async findQuestion(question: string): Promise<any> {

    }

    async getQuestionById(id: string): Promise<QuestionDetail> {
        return new QuestionDetail();
    }
}

export default AnonymousWorker;