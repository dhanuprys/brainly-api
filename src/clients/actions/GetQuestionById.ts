import ServerInformation from '../../contracts/ServerInformation';
import QuestionDetail from '../../wrappers/QuestionDetail';

function GetQuestionById(server: ServerInformation, config: { id: string }) {
    return new QuestionDetail();
}

export default GetQuestionById;