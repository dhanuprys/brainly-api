import ServerInformation from '../../contracts/ServerInformation';
import QuestionResults from '../../wrappers/QuestionResults';

async function FindQuestion(server: ServerInformation, config: { question: string }) {
    return new QuestionResults();
}

export default FindQuestion;