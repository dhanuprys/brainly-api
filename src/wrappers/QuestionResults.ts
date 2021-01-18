import WithIterator from '../contracts/WithIterator';
import WithRawData from '../contracts/WithRawData';
import QuestionDetail from './QuestionDetail';

class QuestionResults implements WithIterator<QuestionDetail>, WithRawData {
    readonly raw: any;

    constructor(raw: any = {}) {
        this.raw = raw;
    }

    async getFirstQuestion(): Promise<QuestionDetail | null> {
        return new QuestionDetail();
    }

    async getAllQuestion(): Promise<QuestionDetail[] | null> {
        return [new QuestionDetail()];
    }

    async getLastQuestion(): Promise<QuestionDetail | null> {
        return new QuestionDetail();
    }

    *[Symbol.iterator](): Iterator<QuestionDetail> {
        yield new QuestionDetail();
    }
}

export default QuestionResults;