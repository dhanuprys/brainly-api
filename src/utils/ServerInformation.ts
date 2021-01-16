import { default as ServerInformationContract } from '../contracts/ServerInformation';
import Lessons from '../Lessons';

// Static class
class ServerInformation {
    static create<T extends Lessons>(url: string, code: string, name: string, category: T): ServerInformationContract<T> {
        return {
            Url: url,
            Code: code,
            Name: name,
            Category: category
        };
    }
}

export default ServerInformation;