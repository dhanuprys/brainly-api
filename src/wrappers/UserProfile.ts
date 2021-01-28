import WithRawData from '../contracts/WithRawData';

class UserProfile implements WithRawData {
    readonly raw: any;

    constructor(raw: any = {}) {
        this.raw = raw;
    }

    async getId(): Promise<string> {
        return <string>this.raw.userById.databaseId;
    }

    async getAvatar(): Promise<string> {
        return <string>this.raw.userById.avatar.thumbnailUrl;
    }

    async getNick(): Promise<string> {
        return <string>this.raw.userById.nick;
    }
}

export default UserProfile;