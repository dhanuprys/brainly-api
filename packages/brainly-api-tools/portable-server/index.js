function registerProgram(program) {
    program
        .command('portable-server')
        .option('-p, --port <port>', 'Manually set server port')
        .description('start portable server')
        .action((option) => {
            console.log(option)
        });
}

module.exports = {
    register: registerProgram
};