'use strict'

var hippie = require('hippie');

hippie()
  .header("User-Agent", "hippie")
  .json()
  .get('https://api.fsanllehi.me/chaucha')
  .expectStatus(200)
  .expectHeader('Content-Type', 'application/json; charset=utf-8')
  .end(function(err, res, body) {
    if (err) throw err;
    console.log(body);
    process.exit(0);
  });
