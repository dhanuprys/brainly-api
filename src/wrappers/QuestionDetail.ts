import WithRawData from '../contracts/WithRawData';
import AnswerList from './AnswerList';

class QuestionDetail implements WithRawData {
    readonly raw: any;

    constructor(raw: any = {}) {
        this.raw = raw;
    }

    async getQuestion(): Promise<string> {
        return <string>this.raw.node.content;
    }

    async getAuthor() {
        return this.raw.node.author;
    }

    async getAnswers(): Promise<AnswerList> {
        return new AnswerList(this.raw.node.answers);
    }
}

export default QuestionDetail;