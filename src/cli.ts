import { Server } from './index';
import { program } from 'commander';
import chalk from 'chalk';
import safeRequire from './functions/safeRequire';

const underDevelopment = () => {
    console.log(chalk.yellowBright('😢 Under development...'));
};
const dynamicCommands: Partial<any> = {
    exampleList: safeRequire<any>('@brainly-api-tools/example-list'),
    portableServer: safeRequire<any>('@brainly-api-tools/portable-server'),
    docsServer: safeRequire<any>('@brainly-api-tools/docs-server')
};

program
    .name('brainly-api')
    .version('0.0.5')
    .addHelpText('beforeAll', chalk.bold(`${chalk.greenBright('BRAINLY-API')} CLI TOOL`))
    .configureOutput({
        outputError: (errorString, write) => write(chalk.redBright(errorString))
    });

program
    .command('tool <tooltype>')
    .description('install required tool, e.g auth, random-useragent')
    .action(underDevelopment);

program
    .command('server-locations')
    .option('-r, --raw', 'display raw data')
    .description('show all available server locations')
    .action((option) => {
        if (option.raw) {
            console.log('Now raw option is not supported yet');
        }

        console.log(Server);
    });

for (const commandName in dynamicCommands) {
    const dynamicCommand: any = dynamicCommands[commandName];

    if (dynamicCommand !== null) {
        dynamicCommand.register(program);
    }
}

program.parse();
