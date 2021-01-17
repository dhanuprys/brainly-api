import WithIterator from '../contracts/WithIterator';
import AnswerList from './AnswerList';

class QuestionDetail {
    private readonly _database: any;

    constructor(database: any = {}) {
        this._database = database;
    }

    async getAskerProfile() {
        
    }

    async getAnswers(): Promise<AnswerList> {
        return new AnswerList();
    }
}

export default QuestionDetail;