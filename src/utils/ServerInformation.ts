import { default as ServerInformationContract } from '../contracts/ServerInformation';
import Lessons from '../Lessons';

class ServerInformation {
    static create(url: string, code: string, name: string, category: Lessons): ServerInformationContract {
        return {
            Url: url,
            Code: code,
            Name: name,
            Category: category
        };
    }
}

export default ServerInformation;