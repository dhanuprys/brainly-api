import { AxiosStatic } from 'axios';
import ServerInformation from '../../contracts/ServerInformation';
import QuestionResults from '../../wrappers/QuestionResults';

async function FindQuestion(axios: AxiosStatic, server: ServerInformation, config: { question: string }) {
    return new QuestionResults();
}

export default FindQuestion;