// static class
class Graphql {
    static generate(operationName: string, variables: any, query: any): any {
        return {
            operationName: operationName,
            variables: variables,
            query: query
        };
    }
}

export default Graphql;