import { AxiosStatic } from 'axios';
import Configurable from '../../configurable';
import QuestionResults from '../../wrappers/QuestionResults';
import Graphql from '../../utils/Graphql';
import AutoRequest from '../../utils/AutoRequest';

async function FindQuestion(axios: AxiosStatic, server: Configurable.ServerInformation, config: { question: string, dataLength: number }) {
    const rawQuery: Configurable.GraphqlQueryArray = Graphql.generate('SearchQuery', {'query': config.question, 'after': null, 'first': config.dataLength || 10 }, 'query SearchQuery($query: String!, $first: Int!, $after: ID) {\n  questionSearch(query: $query, first: $first, after: $after) {\n    count\n    edges {\n      node {\n        id\n        databaseId\n        author {\n          id\n          databaseId\n          isDeleted\n          nick\n          avatar {\n            thumbnailUrl\n            __typename\n          }\n          rank {\n            name\n            __typename\n          }\n          __typename\n        }\n        content\n        answers {\n          nodes {\n            thanksCount\n            ratesCount\n            rating\n            content\n            __typename\n          }\n          hasVerified\n          __typename\n        }\n        __typename\n      }\n      highlight {\n        contentFragments\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n');
    let results;

    try {
        results = await AutoRequest.start(server, rawQuery);
    } catch (axiosError) {
        throw axiosError;
    }

    return new QuestionResults(results.data);
}

export default FindQuestion;