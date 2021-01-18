import axios, { AxiosResponse } from 'axios';
import ServerInformation from '../contracts/ServerInformation';

// static class
class AutoRequest {
    static async start(server: ServerInformation, graphqlData: any) {
        let axiosRequest: AxiosResponse;
        
        try {
            // https://brainly.co.id/graphql/id
            axiosRequest = await axios.post(server.Url + '/graphql/' + server.Code.toLowerCase(), graphqlData);
        } catch (requestError) {
            throw requestError;
        }

        return axiosRequest;
    }
}

export default AutoRequest;