import WithIterator from '../contracts/WithIterator';
import AnswerDetail from './AnswerDetail';

class QuestionDetail implements WithIterator<AnswerDetail> {
    async getAskerProfile() {
        
    }

    async getAnswers(): Promise<AnswerDetail[]> {
        return [new AnswerDetail()];
    }

    *[Symbol.iterator](): Iterator<AnswerDetail> {

    }
}

export default QuestionDetail;