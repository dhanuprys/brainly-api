import { AxiosStatic } from 'axios';
import Configurable from '../../configurable';
import AutoRequest from '../../utils/AutoRequest';
import Graphql from '../../utils/Graphql';
import QuestionResults from '../../wrappers/QuestionResults';

async function FindQuestionHighlight(axios: AxiosStatic, server: Configurable.ServerInformation, config: { lesson: Configurable.LessonItem }) {
    const rawQuery: Configurable.GraphqlQueryArray = Graphql.generate('feed', {'gradeIds': [],'subjectIds': [ config.lesson ], 'statusId':'ANSWER_NEEDED', 'cursor':null, 'feedType':'PUBLIC', 'first':20}, 'query feed($feedType: FeedType, $cursor: ID, $subjectIds: [Int], $gradeIds: [Int], $statusId: FeedQuestionStatusFilter, $first: Int) {\n  feed(feedType: $feedType, before: $cursor, first: $first, status: $statusId, gradeIds: $gradeIds, subjectIds: $subjectIds) {\n    pageInfo {\n      ...PageInfoFragment\n      __typename\n    }\n    edges {\n      node {\n        ...QuestionWithAnswersFragment\n        ... on Question {\n          isAuthorsFirstQuestion\n          __typename\n        }\n        __typename\n      }\n      cursor\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment PageInfoFragment on PageInfo {\n  endCursor\n  hasNextPage\n  hasPreviousPage\n  __typename\n}\n\nfragment QuestionWithAnswersFragment on Question {\n  ...QuestionFragment\n  answers {\n    hasVerified\n    nodes {\n      ...AnswerFragment\n content      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment UserFragment on User {\n  id\n  databaseId\n  nick\n  points\n  isDeleted\n  avatar {\n    ...AttachmentFragment\n    __typename\n  }\n  rank {\n    id\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment AttachmentFragment on Attachment {\n  id\n  databaseId\n  url\n  thumbnailUrl\n  extension\n  __typename\n}\n\nfragment SubjectFragment on Subject {\n  id\n  databaseId\n  name\n  slug\n  __typename\n}\n\nfragment GradeFragment on Grade {\n  id\n  databaseId\n  name\n  __typename\n}\n\nfragment AnswerFragment on Answer {\n  id\n  databaseId\n  content\n  author {\n    ...UserFragment\n    __typename\n  }\n  points\n  created\n  isConfirmed\n  isBest\n  attachments {\n    ...AttachmentFragment\n    __typename\n  }\n  __typename\n}\n\nfragment QuestionFragment on Question {\n  id\n  databaseId\n  content\n  pointsForAnswer\n  pointsForBestAnswer\n  canBeAnswered\n  created\n  author {\n    ...UserFragment\n    __typename\n  }\n  subject {\n    ...SubjectFragment\n    __typename\n  }\n  grade {\n    ...GradeFragment\n    __typename\n  }\n  attachments {\n    ...AttachmentFragment\n    __typename\n  }\n  __typename\n}\n');
    let results;

    try {
        results = await AutoRequest.start(server, rawQuery);
    } catch (axiosError) {
        throw axiosError;
    }

    return new QuestionResults(results.data, 'feed');
}

export default FindQuestionHighlight;