import WithIterator from '../contracts/WithIterator';
import WithRawData from '../contracts/WithRawData';
import QuestionDetail from './QuestionDetail';

class QuestionResults implements WithIterator<QuestionDetail>, WithRawData {
    readonly raw: any;
    private _questionDetails: QuestionDetail[];
    private _operationType: string;

    constructor(raw: any = {}, operationType: 'questionSearch' | 'feed' = 'questionSearch') {
        this.raw = raw;
        this._operationType = operationType;
        this._questionDetails = [];

        // Remap values, raw to class
        for (const question of this.raw[0].data[this._operationType].edges) {
            this._questionDetails.push(
                new QuestionDetail(question)
            );
        }
    }

    /**
     * Mengambil data perntanyaan pertama
     */
    async getFirstQuestion(): Promise<QuestionDetail | null> {
        return this.raw[0].data[this._operationType].count < 1 
            ? null 
            : this._questionDetails[0];
    }

    /**
     * Mengambil seluruh data pertanyaan yang ada
     */
    async getAllQuestion(): Promise<QuestionDetail[]> {
        return [...this._questionDetails];
    }

    /**
     * Mengambil data pertanyaan terakhir
     */
    async getLastQuestion(): Promise<QuestionDetail | null> {
        return this.raw[0].data[this._operationType].count < 1 
            ? null 
            : new QuestionDetail(this._questionDetails[
                this._questionDetails.length-1
            ]);
    }

    /**
     * @interface WithIterator<> implementation
     */
    *[Symbol.iterator](): Iterator<QuestionDetail> {
        for (const question of this._questionDetails) {
            yield question;
        }
    }
}

export default QuestionResults;