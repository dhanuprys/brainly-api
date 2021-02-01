import Configurable from '../configurable';
import Subjects from '../Subjects';

// Static class
class ServerInformation {
    static create<T extends Subjects>(url: string, code: string, name: string, subjects: T): Configurable.ServerInformation<T> {
        return {
            Url: url,
            Code: code,
            Name: name,
            Subjects: subjects
        };
    }
}

export default ServerInformation;