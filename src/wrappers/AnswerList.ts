import WithIterator from '../contracts/WithIterator';
import AnswerDetail from './AnswerDetail';

class AnswerList implements WithIterator<AnswerDetail> {
    private readonly _database: any;

    constructor(database: any = {}) {
        this._database = database;
    }

    async getFirstAnswer() {

    }

    async getLastAnswer() {

    }

    async getAllAnswer(): Promise<AnswerDetail[]> {
        return [new AnswerDetail()];
    }

    *[Symbol.iterator](): Iterator<AnswerDetail> {

    }
}

export default AnswerList;