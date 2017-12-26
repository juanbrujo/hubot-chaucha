// Description:
//   Obtiene precio del CHA desde una api externa que la toma probablemente desde Orionx.io
//
// Commands:
//   hubot chaucha
//
// Author:
//   @jorgeepunan

var CLP = require('numbertoclpformater').numberToCLPFormater;

module.exports = function(robot) {
  robot.respond(/chaucha\s?(.*)/i, function(msg) {

    var url = 'https://api.fsanllehi.me/chaucha';

    robot.http(url).get()(function(err, res, body) {
      if (err || res.statusCode !== 200 || body === 'ERROR' || /sorry/ig.test(body)) {
        if (err) robot.emit('error', err, msg)
        return msg.reply('Ocurrió un error');
      }
      var data = JSON.parse(body);
      msg.send('1 Chaucha está a ' + CLP(data[0].precio, 'CLP$', true) + ' (' + data[0].fecha + ').')
    });

  });
};
