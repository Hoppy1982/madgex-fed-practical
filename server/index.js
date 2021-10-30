const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Path = require('path');
const Blipp = require('blipp');
const Nunjucks = require('nunjucks');
const Routes = require('./lib/routes');
const DataModel = require('./data/model');

// Create a server with a host and port
const server = new Hapi.Server({
  host: 'localhost',
  port: 8000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '../public'),
    },
  },
});

// Start the server
const start = async function () {
  await server.register([Inert, Vision, Blipp]);

  server.views({
    engines: {
      njk: {
        compile: (src, options) => {
          const template = Nunjucks.compile(src, options.environment);
          return (context) => {
            return template.render(context);
          };
        },
        prepare: (options, next) => {
          options.compileOptions.environment = Nunjucks.configure(options.path, { watch: false });
          return next();
        },
      },
    },
    relativeTo: __dirname,
    path: Path.join(__dirname, '../src/templates'),
    isCached: process.env.NODE_ENV === 'production' ? true : false,
    context: DataModel,
  });

  server.route(Routes);

  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
