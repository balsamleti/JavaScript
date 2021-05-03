const fs = require('fs');

const readStream = fs.createReadStream('./docs/file2.txt', {encoding: 'utf8'});

const writeStream = fs.createWriteStream('./docs/file3.txt')


readStream.on('data', (chunk) => {
    console.log('---------NEW CHUNK--------');
    console.log(chunk.toString());

    writeStream.write('---------NEW CHUNK--------');
    writeStream.write(chunk);
})


// readStream.pipe(writeStream);