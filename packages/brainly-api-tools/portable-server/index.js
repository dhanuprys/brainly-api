function registerProgram(program) {
    program
        .command('portable-server')
        .description('start portable server')
        .action(() => {
            console.log('under development');
        });
}

module.exports = {
    register: registerProgram
};