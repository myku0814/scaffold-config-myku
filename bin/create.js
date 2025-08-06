#!/usr/bin/env node
import c from 'ansi-colors';
import inquirer from 'inquirer';
import degit from 'degit';
import fs from 'node:fs';
import path from 'node:path';

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
console.log(`Creating project ${c.green(dst)}...\n`);
const emitter = degit(repo, { cache: false, force: true, verbose: true });
await emitter.clone(dst);

// remove package-lock.json
const packageLockPath = path.join(dst, 'package-lock.json');
if (fs.existsSync(packageLockPath)) {
  fs.rmSync(packageLockPath, { force: true });
}

console.log(c.green(`\n`));
console.log(c.green(`  cd ${dst} \n`));
console.log(c.green(`  npm install\n`));
console.log(c.green(`  npm run start\n`));


// inquirer.js introduction, https://juejin.cn/post/7358302760151187468
// custom create-xxx-app, https://dev.to/donnierich/create-your-custom-npm-template-package-1ai5#a-simple-scaffolding-package