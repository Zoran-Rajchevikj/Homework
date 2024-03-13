// import chalk from "chalk";
// console.log(chalk.blue("Hello ") + chalk.red("world"));

import chalk from "chalk";
const log = console.log;

log(chalk.red("Hello"));
log(chalk.blue.bgRed.bold.inverse('Hello world!'));