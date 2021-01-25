import axios, { AxiosResponse } from 'axios';
import Configurable from '../configurable';

// static class
class AutoRequest {
    static async start(server: Configurable.ServerInformation, graphqlData: any) {
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