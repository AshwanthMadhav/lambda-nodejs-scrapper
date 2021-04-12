'use strict';
const request = require('axios');
const { extract } = require('./helpers')

module.exports.getPage = (event, context, callback) => {
  request(event.url).then(({ data }) => {
    const response = extract(data);
    callback(null, response);
  })
};
