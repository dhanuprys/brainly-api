const { default: Encryption } = require('../build/utils/Encryption');
const { default: Graphql } = require('../build/utils/Graphql');

describe('test encryption utils', () => {
    test('decrypting a text', () => {
        expect(
            Encryption.decrypt(Encryption.encrypt('foobar'))
        ).toBe('foobar');
    });
});

describe('test graphql query generator', () => {
    test('should return expected properties', () => {
        const graphqlRawData = Graphql.generate('foo', { bar: true }, { beer: false });

        expect(graphqlRawData).toEqual({ 
            operationName: 'foo', 
            variables: { bar: true },
            query: { beer: false }
        });
    });
});