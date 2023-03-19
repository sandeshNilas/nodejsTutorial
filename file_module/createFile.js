const { error } = require('console');
var fs = require('fs');

//create the file with the data
fs.appendFile("myfile.txt","hello world111!!",function(err){
    if (err) throw error;
    console.log('saved');
});

//create the empty file in the system
fs.open("myfile1.txt","w",function(err){
    if(err) throw error;
    console.log("file created!!!!");
});


//create the new file 
fs.writeFile("myfile2.txt","helloworld test1",function(err){
    if(err) throw error;
    console.log('Saved this too');
});