const Encryption = require('../build/utils/Encryption');

describe('test encryption utils', () => {
    test('decrypting a text', () => {
        expect(
            Encryption.decrypt(Encryption.encrypt('foobar'))
        ).toBe('foobar');
    });
});