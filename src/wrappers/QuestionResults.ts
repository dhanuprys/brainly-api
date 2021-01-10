import WithIterator from '../contracts/WithIterator';
import QuestionDetail from './QuestionDetail';

class QuestionResults implements WithIterator<QuestionDetail> {
    async getFirstQuestion() {

    }

    async getAllQuestion() {

    }

    async getLastQuestion() {

    }

    *[Symbol.iterator](): Iterator<QuestionDetail> {
        yield new QuestionDetail();
    }
}

export default QuestionResults;