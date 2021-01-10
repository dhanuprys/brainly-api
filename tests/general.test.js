const { BrainlyAPI } = require('../build');

test('should return current version of the library', () => {
    const { version: currentVersion } = require('../package.json');
    
    expect(BrainlyAPI.VERSION).toEqual(currentVersion);
});