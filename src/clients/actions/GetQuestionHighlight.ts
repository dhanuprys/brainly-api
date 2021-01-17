import ServerInformation from '../../contracts/ServerInformation';
import Configurable from '../../configurable';
import QuestionResults from '../../wrappers/QuestionResults';

async function GetQuestionHighlight(server: ServerInformation, config: { lesson: Configurable.LessonItem }) {
    return new QuestionResults();
}

export default GetQuestionHighlight;