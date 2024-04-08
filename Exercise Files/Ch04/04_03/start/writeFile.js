const fs = require("fs");

let md = `
    This is a New File
    ==================
    
    ES6 Template Strings are cool. The honor whitespace.
    
    * Template Strings
    * Node File System
    * Readline CLIs
`;

fs.writeFile("javascript.md", md.trim(), function () {
  console.log("Markdown Created");
});
