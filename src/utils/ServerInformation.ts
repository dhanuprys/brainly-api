import Configurable from '../configurable';
import Lessons from '../Lessons';

// Static class
class ServerInformation {
    static create<T extends Lessons>(url: string, code: string, name: string, category: T): Configurable.ServerInformation<T> {
        return {
            Url: url,
            Code: code,
            Name: name,
            Category: category
        };
    }
}

export default ServerInformation;