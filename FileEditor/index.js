const fs = require("fs");
const path = require("path");
const operation = process.argv[2]; 
const file = process.argv[3];      // File name or directory path
const content = process.argv[4];    // Content to append (only needed for "append")

// Using switch-case to handle different operations
switch (operation) {
  
  // Case to read file contents
  case "read":
    fs.readFile(file, "utf8", (err, data) => {
      if (err) return console.error(`Error reading file: ${err.message}`);
      console.log(`Contents of ${file}:\n${data}`);
    });
    break;

  // Case to create a new file
  case "create":
    fs.writeFile(file, "", (err) => {
      if (err) return console.error(`Error creating file: ${err.message}`);
      console.log(`File '${file}' created`);
    });
    break;

  // Case to delete a file
  case "delete":
    fs.unlink(file, (err) => {
      if (err) return console.error(`Error deleting file: ${err.message}`);
      console.log(`File '${file}' deleted`);
    });
    break;

  // Case to append content to a file
  case "append":
    fs.appendFile(file, `\n${content}`, (err) => {
      if (err) return console.error(`Error appending content: ${err.message}`);
      console.log(`Content appended to the file '${file}'`);
    });
    break;

  // Case to rename a file
  case "rename":
    const newFileName = content; // Assuming new file name is passed as the fourth argument
    fs.rename(file, newFileName, (err) => {
      if (err) return console.error(`Error renaming file: ${err.message}`);
      console.log(`File '${file}' renamed to '${newFileName}'`);
    });
    break;

  // Case to list all files and directories
  case "list":
    fs.readdir(file, (err, files) => {
      if (err) return console.error(`Error listing directory: ${err.message}`);
      console.log(`Contents of directory '${file}':\n${files.join("\n")}`);
    });
    break;

  // Default case for invalid operations
  default:
    console.log(`Invalid operation '${operation}'`);
}
