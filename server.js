var express = require('express')
var app = express()
var moment = require('os');

app.get('/whoami', function(req,res) {
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

	var os = require('os');
var accetLang = req.headers['accept-language'].split(',')[0]

    res.json({
      ipaddress: ip,
      language: accetLang,
      software : os.platform() +' '+ os.release()
    });
  


});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
