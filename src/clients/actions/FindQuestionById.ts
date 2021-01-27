import { AxiosStatic } from 'axios';
import Configurable from '../../configurable';
import QuestionDetail from '../../wrappers/QuestionDetail';

function FindQuestionById(axios: AxiosStatic, server: Configurable.ServerInformation, config: { id: string }) {
    return new QuestionDetail();
}

export default FindQuestionById;