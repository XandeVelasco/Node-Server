process.title = 'MyWebServer';
   var args = process.argv,
     port = args[2] || 8080,          // o servidor esta configurado para a porta 8080
     webServer = require('./server');

  // webServer.listen(port, function() {
  //   console.log('Server started at port ' + port);
  // });
  