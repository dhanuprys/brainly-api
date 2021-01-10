const { BrainlyAPI, Server } = require('../build');

test('should return current version of the library', () => {
    const { version: currentVersion } = require('../package.json');
    
    expect(BrainlyAPI.VERSION).toEqual(currentVersion);
});

test('should return correct server information', () => {
    const server = Server.ID;

    expect(server.Code).toBe('ID');
    expect(server.Name).toBe('Indonesia');
});