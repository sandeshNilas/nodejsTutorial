var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr,true);

console.log(q.pathname);
console.log(q.search);

var query = q.query;
console.log(query)