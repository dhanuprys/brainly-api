import Configurable from '../configurable';

// static class
class Graphql {
    static generate(operationName: string, variables: any, query: string): Configurable.GraphqlQueryArray {
        return [{
            operationName: operationName,
            variables: variables,
            query: query
        }];
    }
}

export default Graphql;