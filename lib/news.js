import axios from "axios";
import chalk from "chalk";

async function fetchNews() {
  try {
    const res = await axios.get("https://dev.to/api/articles?top=3");
    console.log(chalk.green("\nTop Dev News from dev.to:\n"));
    res.data.forEach((a, i) => {
      console.log(`${i + 1}. ${chalk.cyan(a.title)} by ${a.user.name}`);
      console.log(`   👉 ${a.url}\n`);
    });
  } catch (error) {
    console.error("Failed to fetch news:", error.message);
  }
}

export { fetchNews };
