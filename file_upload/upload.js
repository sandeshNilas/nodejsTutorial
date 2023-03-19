var formiable = require('formidable');
var fs = require('fs');
var http = require('http');


http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formiable.IncomingForm();
        form.parse(req,function(err,field,files){
            var oldpath = files.filetoupload.filepath;
            var newpath = './upload'+files.filetoupload.originalFilename;
            fs.copyFile(oldpath,newpath,function(err){
                if (err) throw err;
                res.write('File Uploaded and Moved');
                res.end();
            });
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(4000);
