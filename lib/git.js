import simpleGit from "simple-git";
import chalk from "chalk";

async function showGitStatus() {
  const git = simpleGit();
  try {
    const status = await git.status();
    const log = await git.log({ maxCount: 3 });

    console.log(chalk.green("📂 Branch:"), status.current);
    console.log(
      chalk.green("🔄 Staged changes to commit:"),
      status.staged.length
    );
    console.log(chalk.green("🕒 Last 3 commits:"));
    log.all.forEach((commit, i) => {
      console.log(`  ${i + 1}. ${chalk.cyan(commit.message)} (${commit.date})`);
    });
  } catch (error) {
    console.error("Error fetching git status:", error.message);
  }
}

export { showGitStatus };
