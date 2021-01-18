import WithIterator from '../contracts/WithIterator';
import WithRawData from '../contracts/WithRawData';
import QuestionDetail from './QuestionDetail';

class QuestionResults implements WithIterator<QuestionDetail>, WithRawData {
    readonly raw: any;
    private _questionDetails: QuestionDetail[];

    constructor(raw: any = {}) {
        this.raw = raw;
        this._questionDetails = [];

        for (const question of this.raw[0].data.questionSearch.edges) {
            this._questionDetails.push(
                new QuestionDetail(question)
            );
        }
    }

    async getFirstQuestion(): Promise<QuestionDetail | null> {
        return this.raw[0].data.questionSearch.count < 1 
            ? null 
            : this._questionDetails[0];
    }

    async getAllQuestion(): Promise<QuestionDetail[]> {
        return [...this._questionDetails];
    }

    async getLastQuestion(): Promise<QuestionDetail | null> {
        return this.raw[0].data.questionSearch.count < 1 
            ? null 
            : new QuestionDetail(this._questionDetails[
                this._questionDetails.length-1
            ]);
    }

    *[Symbol.iterator](): Iterator<QuestionDetail> {
        for (const question of this._questionDetails) {
            yield question;
        }
    }
}

export default QuestionResults;