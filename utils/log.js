const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FF00")('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ ❗ Lỗi rồi ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("33FFCC")(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#66FF00")('[ Zuri-Bot ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ Zuri-Bot ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#3399CC")('[ Zuri-Bot ] » ') + data);
			break;
	}
}
