import WithRawData from '../contracts/WithRawData';

class UserProfile implements WithRawData {
    readonly raw: any;
    private _profile: any;

    constructor(raw: any = {}) {
        this.raw = raw;
        this._profile = this.raw[0].data;
    }

    async getId(): Promise<string> {
        return <string>this._profile.userById.databaseId;
    }

    async getAvatar(): Promise<string> {
        return <string>this._profile.userById.avatar.thumbnailUrl;
    }

    async getNick(): Promise<string> {
        return <string>this._profile.userById.nick;
    }
}

export default UserProfile;