import { AxiosStatic } from 'axios';
import Configurable from '../../configurable';
import QuestionResults from '../../wrappers/QuestionResults';

async function GetQuestionHighlight(axios: AxiosStatic, server: Configurable.ServerInformation, config: { lesson: Configurable.LessonItem }) {
    return new QuestionResults();
}

export default GetQuestionHighlight;