import Cryptr from 'cryptr';

// Static class
class Encryption {
    private static ENCRYPT_PASSWORD: string = 'D7D4C5B8D2B5968184AEF19A6E8D3';

    private static _encryption: Cryptr = new Cryptr(Encryption.ENCRYPT_PASSWORD);

    static decrypt(text: string): string {
        return Encryption._encryption.decrypt(text);
    }

    static encrypt(text: string): string {
        return Encryption._encryption.encrypt(text);
    }
}

export default Encryption;