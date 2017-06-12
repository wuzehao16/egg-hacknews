'use strict';

// app/router.js
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/news', app.controller.news.list);
};
