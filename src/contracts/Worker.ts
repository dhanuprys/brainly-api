import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';
import UserProfile from '../wrappers/UserProfile';
import Configurable from '../configurable';

interface Worker {
    findQuestion(question: string): Promise<QuestionResults>;
    findQuestionHighlight(category: Configurable.LessonItem): Promise<QuestionResults>;
    findQuestionById(id: string): Promise<QuestionDetail>;
    fetchUserProfile(userId: string): Promise<UserProfile>;
}

export default Worker;