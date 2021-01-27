import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';
import Configurable from '../configurable';

interface Worker {
    readonly currentServer: Configurable.ServerInformation;
    findQuestion(question: string): Promise<QuestionResults>;
    findQuestionHighlight(category: Configurable.LessonItem): Promise<QuestionResults>;
    findQuestionById(id: string): Promise<QuestionDetail>;
}

export default Worker;