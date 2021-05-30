const { program } = require('commander');
const app = require('./packages/brainly-api-tools/portable-server/index');

app.register(program);

program.parse();