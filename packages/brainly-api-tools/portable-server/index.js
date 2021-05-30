const core = require('./lib/core');

function registerProgram(program) {
    program
        .command('portable-server')
        .option('-p, --port <port>', 'Manually set server port')
        .description('start portable server')
        .action((option) => {
            core.execute(option.port);
        });
}

module.exports = {
    register: registerProgram
};