import { execSync } from 'child_process';

export async function isNeedPush() {
  const stdout = await execSync('git status -s', {
    encoding: 'utf-8',
  });
  return !!stdout;
}

export async function add() {
  const stdout = await execSync('git add -A .', {
    encoding: 'utf-8',
  });
  return stdout;
}

/**
 * @param {string} commitMessage
 */
export async function commit(commitMessage) {
  await execSync(`git config --local user.email "actions@github.com"`, {
    encoding: 'utf-8',
  });
  await execSync(`git config --local user.name "Github Actions"`, {
    encoding: 'utf-8',
  });
  await execSync(`git commit -m "${commitMessage}" --no-verify`, {
    encoding: 'utf-8',
  });
}

/**
 * @param {string} branch
 */
export async function push(branch) {
  await execSync(`git push --set-upstream origin ${branch}`, {
    encoding: 'utf-8',
  });
}

async function main() {
  const needPush = await isNeedPush();
  if (needPush) {
    if (!process.env.COMMIT_MESSAGE) {
      throw new Error('process.env.COMMIT_MESSAGE is required');
    }
    await add();
    await commit(process.env.COMMIT_MESSAGE);
  } else {
    console.log('nothing to commit, working tree clean');
  }
}

main();
