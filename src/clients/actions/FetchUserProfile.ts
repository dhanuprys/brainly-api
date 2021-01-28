import { AxiosStatic } from 'axios';
import Configurable from '../../configurable';
import AutoRequest from '../../utils/AutoRequest';
import Graphql from '../../utils/Graphql';
import UserProfile from '../../wrappers/UserProfile';

async function FindQuestionHighlight(axios: AxiosStatic, server: Configurable.ServerInformation, config: { userId: string }) {
    const rawQuery: Configurable.GraphqlQueryArray = Graphql.generate('ProfilePage', {'userId': Number(config.userId), 'subjectsIds': [24,25,2,1,9,10,4,6,3,5,19,7,8,11,12,14,13,22,20,18,23,21,15,16,17]}, 'query ProfilePage($userId: Int!, $subjectsIds: [ID!]) {\n  userById(id: $userId) {\n    databaseId\n    nick\n    points\n    avatar {\n      thumbnailUrl\n      __typename\n    }\n    rank {\n      name\n      description\n      requirements {\n        points\n        bestAnswersInLast30Days\n        __typename\n      }\n      __typename\n    }\n    grade {\n      name\n      __typename\n    }\n    specialRanks {\n      name\n      description\n      requirements {\n        points\n        bestAnswersInLast30Days\n        __typename\n      }\n      __typename\n    }\n    thanks {\n      count\n      __typename\n    }\n    created\n    receivedThanks\n    answerCountBySubject(ids: $subjectsIds) {\n      subject {\n        name\n        icon\n        __typename\n      }\n      count\n      markedAsBest\n      __typename\n    }\n    bestAnswersCount\n    answers {\n      count\n      __typename\n    }\n    questions {\n      count\n      __typename\n    }\n    friends {\n      count\n      __typename\n    }\n    __typename\n  }\n}\n');
    let results;

    try {
        results = await AutoRequest.start(server, rawQuery);
    } catch (axiosError) {
        throw axiosError;
    }

    return new UserProfile(results.data);
}

export default FindQuestionHighlight;