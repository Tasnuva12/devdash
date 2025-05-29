#!/usr/bin/env node

import { Command } from "commander";
import { fetchNews } from "../lib/news.js";
import { addNotes, listNotes } from "../lib/notes.js";
import { showGitStatus } from "../lib/git.js";


const program = new Command();

program
  .name("devdash")
  .description("Developer command-line dashboard")
  .version("1.0.0");
const notes = program.command("notes").description("Manage notes");
notes.command("add").description("Add a note").action(addNotes);
notes.command("list").description("List all notes").action(listNotes);


program
  .command("news")
  .description("Show latest developer news")
  .action(fetchNews);
program
  .command("git")
  .description("Show current git status summary")
  .action(showGitStatus);


program.parse(process.argv);
  