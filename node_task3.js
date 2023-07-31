// Asynchronous File Handling
const fs = require('fs');

const fileName = './data.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordCount = data.split(/\s+/).length;
  console.log('Total word count:', wordCount);
});
