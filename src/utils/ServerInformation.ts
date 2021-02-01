import Configurable from '../configurable';
import Lessons from '../Lessons';

// Static class
class ServerInformation {
    static create<T extends Lessons>(url: string, code: string, name: string, lessons: T): Configurable.ServerInformation<T> {
        return {
            Url: url,
            Code: code,
            Name: name,
            Lessons: lessons
        };
    }
}

export default ServerInformation;