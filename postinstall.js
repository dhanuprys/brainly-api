const { env } = require('process');
const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');

//if (env.BUILD_MODE === '1') {
//  console.log(chalk.blueBright('Removing unused files..'));
//   rimraf(path.resolve(__dirname, 'src'), () => {
//      rimraf(path.resolve(__dirname, 'tsconfig.json'), () => {});
//    });
//}

console.log(chalk.yellowBright('Thanks for using brainly-api :)'));
