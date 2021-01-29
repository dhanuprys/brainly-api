#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const highlighter = require('cli-highlight');
const chalk = require('chalk');
const npm = require('npm');
const safeRequire = require('./build/functions/safeRequire').default;

const EXAMPLE_PATH = path.resolve(__dirname, './examples');
const underDevelopment = () => {
    console.log(chalk.yellowBright('😢 Under development...'));
};
const dynamicCommands = {
    localServer: safeRequire('@brainly-api/local-server'),
    docsServer: safeRequire('@brainly-api/docs-server')
};

program
    .name('brainly-api')
    .version('0.0.4')
    .addHelpText('beforeAll', chalk.bold(`${chalk.greenBright('BRAINLY-API')} CLI TOOL`))
    .configureOutput({
        outputError: (errorString, write) => write(chalk.redBright(errorString))
    });

program
    .command('tool <tooltype>')
    .description('install required tool, e.g auth, random-useragent')
    .action(underDevelopment);

if (dynamicCommands.localServer !== null) {
    program
        .command('serve')
        .description('run brainly api local server')
        .action(underDevelopment);
}

if (dynamicCommands.docsServer !== null) {
    program
        .command('docs')
        .description('run brainly api docs server')
        .action(underDevelopment);
}

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
                fs.readFileSync(fileName).toString(),
                { languange: 'js' }
            )
        );
    });

program.parse();
