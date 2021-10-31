const IndexPageModel = require('../data/index-page-model');
const SearchPageModel = require('../data/search-page-model');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return h.view('index', {
        pageModel: IndexPageModel
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
    path: '/find-a-job',
    handler: function (request, h) {
      const { keyword, location, radius } = request.query;
      // TODO - Sanitize & validate input, get matching jobs and return them in response
      return h.view('find-a-job', {
        pageModel: SearchPageModel,
        searchParams: `keyword: ${keyword}, location: ${location}, radius: ${radius}`,
      });
    },
    options: {
      description: 'Search',
    },
  },
];
