import { default as ServerInformationContract } from '../contracts/ServerInformation';
import Lessons from '../contracts/Lessons';

class ServerInformation {
    static create(code: string, name: string, category: Lessons): ServerInformationContract {
        return {
            Code: code,
            Name: name,
            Category: category
        };
    }
}

export default ServerInformation;