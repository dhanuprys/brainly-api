#!/usr/bin/env node

const process = require('process');
const chalk = require('chalk');
const npm = require('npm');
const { BrainlyAPI } = require('./build/index');

const additionalPackage = [
    ['puppeteer'],
    ['--save-dev', '@types/puppeteer']
];

/**
 * @param {string[]} packageList
 */
function installPackage(packageList, npm) {
    const currentPackage = packageList[0];

    if (currentPackage === undefined) {
        console.log(chalk.blueBright('Done.'));
        return;
    }

    console.log('Installing ' + chalk.yellowBright(currentPackage[currentPackage.length - 1]) + '...');

    npm.commands.install(currentPackage, () => {
        installPackage(packageList.shift(), npm);
    });
}

function showUp() {
    console.log(chalk.bold.greenBright('BRAINLY-API CLI TOOLS'));
    console.log(chalk.bold.redBright('THIS FEATURE IS STILL UNDER DEVELOPMENT'));

    if (process.argv.length > 2) {
        if (process.argv[2] === '--select') {
            console.log('Please select package. (use \',\' to install multiply package)');
            for (let i = 0; i < additionalPackage.length; i++) {
                console.log(String(i) + ': ' + additionalPackage[i][additionalPackage[i].length - 1]);
            }
        } else if (process.argv[2] === '-v' || process.argv[2] === '--version') {
            console.log(chalk.bold(BrainlyAPI.VERSION));
        }
    } else {
        console.log(chalk.bold('Loading npm resources...'));
        npm.load({}, (error, npm) => {
            if (error) {
                console.log(chalk.bold.redBright('Init failed'));
                return;
            }
            installPackage(additionalPackage, npm);
        });
    }

}

showUp();