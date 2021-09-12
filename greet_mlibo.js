const chalk = require('chalk');
var figlet = require('figlet');
const greet = require('./greet');


const styledMessage = chalk.bgGreen.black(greet('Mlibo'));
console.log(styledMessage)

console.log(figlet.textSync('Hello Mlibo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));