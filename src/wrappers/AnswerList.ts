import WithIterator from '../contracts/WithIterator';
import WithRawData from '../contracts/WithRawData';
import AnswerDetail from './AnswerDetail';

class AnswerList implements WithIterator<AnswerDetail>, WithRawData {
    readonly raw: any;
    private _answerDetails: AnswerDetail[];

    constructor(raw: any = {}) {
        this.raw = raw;
        this._answerDetails = [];

        for (const answer of this.raw.nodes) {
            this._answerDetails.push(answer);
        }
    }

    async getFirstAnswer(): Promise<AnswerDetail | null> {
        return this._answerDetails.length > 0
            ? this._answerDetails[0]
            : null;
    }

    async getLastAnswer(): Promise<AnswerDetail | null> {
        return this._answerDetails.length > 0
            ? this._answerDetails[this._answerDetails.length-1]
            : null;
    }

    async getAllAnswer(): Promise<AnswerDetail[]> {
        return [...this._answerDetails];
    }

    *[Symbol.iterator](): Iterator<AnswerDetail> {
        for (const answer of this._answerDetails) {
            yield answer;
        }
    }
}

export default AnswerList;