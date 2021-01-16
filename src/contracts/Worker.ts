import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';

interface Worker {
    findQuestion(question: string): Promise<QuestionResults>;
    getQuestionHighlight(question: string, category: number): Promise<QuestionResults>;
    getQuestionById(id: string): Promise<QuestionDetail>;
}

export default Worker;