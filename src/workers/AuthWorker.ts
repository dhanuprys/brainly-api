import Server from '../Server';
import Worker from '../contracts/Worker';
import Configurable from '../configurable';
import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';
import UserProfile from '../wrappers/UserProfile';

class AuthWorker implements Worker {
    readonly currentServer: Configurable.ServerInformation;

    constructor(server: Configurable.ServerInformation = Server.US) {
        this.currentServer = server;
    }

    async findQuestion(question: string): Promise<any> {

    }

    async findQuestionHighlight(category: Configurable.LessonItem): Promise<QuestionResults> {
        return new QuestionResults();
    }

    async findQuestionById(id: string): Promise<QuestionDetail> {
        return new QuestionDetail();
    }

    async fetchUserProfile(userId: string): Promise<UserProfile> {
        return new UserProfile();
    }

    async signin(email: string, password: string) {

    }

    async signup(email: string, password: string, country: string, birthday: string) {

    }
}

export default AuthWorker;