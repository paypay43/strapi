'use strict';

/**
 * Module dependencies
 */

/**
 * Expose main routes of the generated API
 */

module.exports = scope => {
  function generateRoutes() {
    const routes = {
      routes: [
        {
          method: 'GET',
          path: '/' + scope.idPluralized,
          handler: scope.globalID + '.find',
          config: {
            policies: [],
          },
        },
        {
          method: 'GET',
          path: '/' + scope.idPluralized + '/count',
          handler: scope.globalID + '.count',
          config: {
            policies: [],
          },
        },
        {
          method: 'GET',
          path: '/' + scope.idPluralized + '/:id',
          handler: scope.globalID + '.findOne',
          config: {
            policies: [],
          },
        },
        {
          method: 'POST',
          path: '/' + scope.idPluralized,
          handler: scope.globalID + '.create',
          config: {
            policies: [],
          },
        },
        {
          method: 'PUT',
          path: '/' + scope.idPluralized + '/:id',
          handler: scope.globalID + '.update',
          config: {
            policies: [],
          },
        },
        {
          method: 'DELETE',
          path: '/' + scope.idPluralized + '/:id',
          handler: scope.globalID + '.delete',
          config: {
            policies: [],
          },
        },
      ],
    };

    return routes;
  }

  return generateRoutes();
};
