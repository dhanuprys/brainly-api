#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const highlighter = require('cli-highlight');
const chalk = require('chalk');
const npm = require('npm');

const EXAMPLE_PATH = './examples';
const underDevelopment = () => {
    console.log(chalk.yellowBright('Under development...'));
};

program
    .name('brainly-api')
    .version('0.0.1')
    .addHelpText('beforeAll', chalk.bold(`${chalk.greenBright('BRAINLY-API')} CLI TOOL`))
    .configureOutput({
        outputError: (errorString, write) => write(chalk.redBright(errorString))
    });

program
    .command('install-all')
    .description('install all dependencies')
    .action(underDevelopment);

program
    .command('install [functionality...]')
    .description('install specify package')
    .action(underDevelopment);

program
    .command('example-list')
    .description('show examples list')
    .action(() => {
        const fileList = fs.readdirSync(EXAMPLE_PATH);

        for (let i = 0; i < fileList.length; i++) {
            const fileName = fileList[i];
            console.log(String(i) + ': ' + fileName);
        }
    });

program
    .command('example [index]')
    .description('show example code')
    .action(index => {
        const fileList = fs.readdirSync(EXAMPLE_PATH);
        let fileName = fileList[Number(index)];

        if (index === undefined) {
            console.log('Please run `brainly-api example-list`');
            return;
        }

        if (fileName === undefined) {
            console.log('Example not found');
            return;
        }

        fileName = path.join(EXAMPLE_PATH, fileName);

        console.log(
            highlighter.highlight(
                fs.readFileSync(fileName).toString(),
                { languange: 'js' }
            )
        );
    });

program.parse();
