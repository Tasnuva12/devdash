import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";

import path from "path";
import { fileURLToPath } from "url";

// __filename and __dirname equivalents in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NOTES_PATH = path.join(__dirname, "../data/notes.json");

function addNotes() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "note",
        message: "Enter the note:",
      },
    ])
    .then((answer) => {
      const notes = JSON.parse(fs.readFileSync(NOTES_PATH));
      notes.push({ text: answer.note, date: new Date().toISOString() });
      fs.writeFileSync(NOTES_PATH, JSON.stringify(notes, null, 2));
      console.log(chalk.green("✅ Note saved!"));
    });
}

function listNotes() {
  const notes = JSON.parse(fs.readFileSync(NOTES_PATH));

  if (notes.length === 0) {
    console.log(chalk.yellow("No notes found."));
    return;
  }

  console.log(chalk.green("\nYour Notes:\n"));

  notes.forEach((n, i) => {
    console.log(
      `${i + 1}. ${chalk.cyan(n.text)} (${new Date(n.date).toLocaleString()})`
    );
  });
}


export { addNotes, listNotes };
