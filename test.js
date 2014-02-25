var supertest = require('supertest');
var app = require('./web');

var tester = supertest(app);

console.log("Test: GET /");
tester.get('/').expect(200).end(function(err, res) {
  if (err) {
    throw err;
  }
  console.log("All tests passed");
  process.exit(0);
});
