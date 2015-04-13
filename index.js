var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
		host: '0.0.0.0',
		port:8080,
    routes: {cors: true}
});

var plugins = [{ register: require('./routes/quotes.js') }];

server.register(plugins, function (err) {
  if (err) { throw err; }

  server.start(function () {
    console.log('info', 'Server running at: ' + server.info.uri);
  });
});
// server.route({
// 	method:'GET',
// 	path:'/hello',
// 	handler:function(request,reply) {
// 			reply('hello world');
// 	}
// });

server.start();