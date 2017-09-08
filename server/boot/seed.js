'use strict';

module.exports = function(server) {
  server.dataSources.postgres.automigrate(function(err, value) {
    console.log('error', err);
    console.log('value', value);
  });
};
