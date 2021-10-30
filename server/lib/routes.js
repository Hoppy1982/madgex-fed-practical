module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return h.view('index', {
        message: 'Hello world',
      });
    },
    options: {
      description: 'Homepage',
    },
  },
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      },
    },
    options: {
      description: 'Static assets',
    },
  },
  {
    method: 'GET',
    path: '/search',
    handler: function (request, h) {
      const { keyword, location, radius } = request.query;
      // TODO - Sanitize & validate input, get matching jobs and return them in response
      return h.view('search', {
        searchParams: `keyword: ${keyword}, location: ${location}, radius: ${radius}`,
      });
    },
    options: {
      description: 'Search',
    },
  },
];
