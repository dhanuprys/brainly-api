import WithRawData from '../contracts/WithRawData';

class AnswerDetail implements WithRawData {
    readonly raw: any;

    constructor(raw: any = {}) {
        this.raw = raw;
    }

    async getContent(): Promise<string> {
        return <string>this.raw.content;
    }
}

export default AnswerDetail;