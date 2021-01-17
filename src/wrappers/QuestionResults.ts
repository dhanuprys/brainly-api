import WithIterator from '../contracts/WithIterator';
import QuestionDetail from './QuestionDetail';

class QuestionResults implements WithIterator<QuestionDetail> {
    private readonly _database: any;

    constructor(database: any = {}) {
        this._database = database;
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