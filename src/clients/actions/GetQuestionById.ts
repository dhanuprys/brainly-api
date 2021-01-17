import { AxiosStatic } from 'axios';
import ServerInformation from '../../contracts/ServerInformation';
import QuestionDetail from '../../wrappers/QuestionDetail';

function GetQuestionById(axios: AxiosStatic, server: ServerInformation, config: { id: string }) {
    return new QuestionDetail();
}

export default GetQuestionById;