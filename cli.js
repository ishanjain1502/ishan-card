import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';

clear()
console.log(chalk.green("          ----------------------"))
console.log(chalk.blue("          Hello There ") + chalk.hex('#964B00')("ヽ(•‿•)ノ"));
console.log(chalk.green("          ----------------------"))

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:ishanjain1502@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Give me a follow on ${chalk.cyanBright.bold("twitter")} !`,
                value: () => {
                    open("https://twitter.com/ishanjain_");
                    console.log("\n Thenks\n");
                }
            },
            {
                name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
                value: () => {
                    open('https://calendly.com/ishanjain1502');
                    console.log("\n See you at the meeting :) \n");
                }
            },
            {
                name: `Which song I am listening the most in past few days?`,
                value: () => {
                    open('https://www.youtube.com/watch?v=1DGNn0GslLQ');
                    console.log("\n Enjoy KK's melodious voice \n");
                }
            },
            {
                name: "Bye Bye.",
                value: () => {
                    console.log("Sayo Naraaaa...\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             Ishan Jain"),
    handle: chalk.white("@ishanjain_"),
    work: `${chalk.white("Engineer")} ${chalk
        .hex("#2b82b2")
        .bold("")}`,

    github: chalk.green("https://github.com/") + chalk.black.bgWhite("ishanjain1502"),
    linkedin: chalk.blue("https://linkedin.com/in/") + chalk.bgBlue("hey-ishan"),
    twitter: chalk.cyan("https://twitter.com/") + chalk.bgCyan("ishanjain_"),
    fueler: chalk.cyan("https://fueler.io/") + chalk.white.bgBlueBright("ishan1789") ,
    // npx: chalk.red("npx") + " " + chalk.white("ishan-jain"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelFueler: chalk.white.bold("     Fueler:"),
    // labelCard: chalk.white.bold("       Card:")
};


const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelFueler}  ${data.fueler}`,
        ``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("still trying to learn and grow myself")}`,
        `${chalk.italic(
            "be a opportunity or you inviting for dinner"
        )}`,
        `${chalk.italic(
            "I am always ready, and looking forward for it :D"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 2,
        top: '-',
	    bottom: '-',
        left: '|||',
        right: '|||',
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());