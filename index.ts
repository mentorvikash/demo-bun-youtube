
// READ AND WRITE Files

// Bun.file pointed to data.txt | -- even if no file exist it target a black space.
const input  = Bun.file("data.txt");
const copyToFile = Bun.file("data_copy.txt");
await Bun.write(copyToFile, input);

// Write text content to file
const textdata = "text data to write to a file"
// --If not file exists create new file. 
const output = Bun.file('output.txt');
Bun.write(output, textdata);