var fs = require('fs');


fs.unlink("myfile.txt",function(err){
    if (err) throw error;
    console.log("File deleted");
})