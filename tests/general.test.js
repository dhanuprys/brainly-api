const { BrainlyAPI, Server } = require('../build');
const { default: AnonymousWorker } = require('../build/workers/AnonymousWorker');
const { default: AuthWorker } = require('../build/workers/AuthWorker');

test('should return current version of the library', () => {
    const { version: currentVersion } = require('../package.json');
    
    expect(BrainlyAPI.VERSION).toEqual(currentVersion);
});

test('should return correct server information', () => {
    const server = Server.ID;

    expect(server.Code).toBe('ID');
    expect(server.Name).toBe('Indonesia');
});

xdescribe('calling application starter method', () => {
    test('without auth and without config', async () => {
        await BrainlyAPI.startWorker(brainly => {
            expect(brainly).toBeInstanceOf(AnonymousWorker);
        });
    });

    test('with auth', async () => {
        await BrainlyAPI.startWorker({ auth: true }, auth => {
            expect(auth).toBeInstanceOf(AuthWorker);
        });
    });
});

describe('EXPERIMENTAL: calling application starter method', () => {
    test('without auth and without config', async () => {
        await BrainlyAPI.startWorker({ experimental: true }, brainly => {
            expect(brainly).toBeInstanceOf(AnonymousWorker);
        });
    });

    test('with auth', async () => {
        await BrainlyAPI.startWorker({ auth: true, experimental: true }, auth => {
            expect(auth).toBeInstanceOf(AuthWorker);
        });
    });
});
