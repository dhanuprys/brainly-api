import { AxiosStatic } from 'axios';
import Configurable from '../../configurable';
import QuestionResults from '../../wrappers/QuestionResults';

async function FindQuestionHighlight(axios: AxiosStatic, server: Configurable.ServerInformation, config: { lesson: Configurable.LessonItem }) {
    return new QuestionResults();
}

export default FindQuestionHighlight;