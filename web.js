var express = require('express');
var app = express();
app.use(express.logger());

module.exports = app;

app.get('/', function(req, res) {
  res.send(200, 'ok');
});

if (!module.parent) {
  var port = Number(process.env.PORT || 5000);
  app.listen(port, function() {
    console.log("App server listening on " + port);
  });
}
