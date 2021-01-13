#!/usr/bin/env node

const process = require('process');
const chalk = require('chalk');
const npm = require('npm');

console.log(chalk.bold('Loading npm resources...'));
npm.load({}, (error, npm) => {
    if (error) {
        console.log(chalk.bold.redBright('Init failed'));
        return;
    }

    console.log(chalk.bold.yellowBright('Installing puppeteer...'));

    npm.commands.install(['puppeteer'], () => {
        npm.commands.install(['--save-dev', '@types/puppeteer'], () => {
            console.log(chalk.bold.blueBright('Done...'));
        });
    });
});