'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1497227003738_848';

  // add your config here
  // 添加配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  return config;
};
// mount middleware
exports.middleware = [
  'robot',
];
// middleware config
exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};
