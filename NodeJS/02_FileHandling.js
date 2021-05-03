const fs = require('fs');

//reading 

fs.readFile('./docs/file1.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

// Execute First
// console.log("FILE ENDED")

// Writing 
fs.writeFile('./docs/file2.txt','hello world' ,() =>{
    console.log("File Written");
});


// directories
if (fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('Folder created');
    });
}else{
    fs.rmdir('./assets', (err) =>{
        if (err){
            console.log(err);
        }
        console.log('Folder Deleted');
    });
}

// deleting files

if (fs.existsSync('./docs/file1.txt')){
    fs.unlink('./docs/file1.txt', (err) =>{
        if (err){
            console.log(err);
        }
        console.log('file deleted');
    });
}