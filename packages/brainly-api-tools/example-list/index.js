function registerProgram(program) {
    program
        .command('example-list')
        .description('show examples list')
        .action(() => {
            const fileList = fs.readdirSync(EXAMPLE_PATH);

            for (let i = 0; i < fileList.length; i++) {
                const fileName = fileList[i];
                console.log(String(i) + ': ' + fileName);
            }

            console.log();
            console.log(`Use ${chalk.bold('`brainly-api example <index>`')} to open example`);
        });

    program
        .command('example [index]')
        .description('show example code')
        .action(index => {
            const fileList = fs.readdirSync(EXAMPLE_PATH);
            let fileName = fileList[Number(index)];

            if (index === undefined) {
                console.log(`Use ${chalk.bold('`brainly-api example-list`')} to view example list`);
                return;
            }

            if (fileName === undefined) {
                console.log('😢 Example not found');
                return;
            }

            fileName = path.resolve(EXAMPLE_PATH, fileName);

            console.log(chalk.gray('// ' + fileName.split('\\').join('/')));
            console.log(
                highlighter.highlight(
                    fs.readFileSync(fileName).toString(), {
                        languange: 'js'
                    }
                )
            );
        });
}

module.exports = {
    register: registerProgram
};