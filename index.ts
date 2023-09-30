
await foo.text(); // contents as a string
 await foo.stream(); // contents as ReadableStream
await foo.arrayBuffer();

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


// TEXT ENCODING.

const encoder = new TextEncoder()
const text_to_encode = "try to incode me if possible"
const data = encoder.encode(text_to_encode)
await Bun.write("encoded_data.txt", data)

