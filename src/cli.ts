import fs from 'fs';
import path from 'path';
import { program } from 'commander';
import highlighter = require('cli-highlight');
import chalk from 'chalk';
import safeRequire from './functions/safeRequire';

const EXAMPLE_PATH = path.resolve(__dirname, './examples');
const underDevelopment = () => {
    console.log(chalk.yellowBright('😢 Under development...'));
};
const dynamicCommands: Partial<any> = {
    exampleList: safeRequire<any>('@brainly-api-tools/example-list'),
    localServer: safeRequire<any>('@brainly-api-tools/local-server'),
    docsServer: safeRequire<any>('@brainly-api-tools/docs-server')
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

for (const commandName in dynamicCommands) {
    const dynamicCommand: any = dynamicCommands[commandName];

    if (dynamicCommand !== null) {
        dynamicCommand.register(program);
    }
}

program.parse();
