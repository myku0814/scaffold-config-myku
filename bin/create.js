#!/usr/bin/env node
import inquirer from 'inquirer';
import degit from 'degit';
const repo = 'myku0814/scaffold-config-myku';

const answers = await inquirer.prompt([
  {
    type: 'input',
    name: 'projectName',
    message: 'Enter your project name: ',
    default: 'mykuuu',
    validate: input => {
      if (!input.trim()) {
        return 'Project name cannot be empty!';
      }
      if (fs.existsSync(input)) {
        return 'Project name exists!';
      }
      return true;
    }
  }
]);

const dst = answers.projectName.trim();
console.log(`Creating project @${dst}...`);
const emitter = degit(repo, { cache: false, force: true, verbose: true });
await emitter.clone(dst);

console.log(` cd ${dst} \n`);
console.log(` npm install\n`);
console.log(` npm run dev\n`);


// inquirer.js introduction, https://juejin.cn/post/7358302760151187468
// custom create-xxx-app, https://dev.to/donnierich/create-your-custom-npm-template-package-1ai5#a-simple-scaffolding-package