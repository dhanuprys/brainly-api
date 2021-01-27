import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';

interface Worker {
    findQuestion(question: string): Promise<QuestionResults>;
    findQuestionHighlight(question: string, category: number): Promise<QuestionResults>;
    findQuestionById(id: string): Promise<QuestionDetail>;
}

export default Worker;