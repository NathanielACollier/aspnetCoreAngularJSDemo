'use strict';

routeConfig.$inject = ['$routeProvider'];

export function routeConfig($routeProvider: ng.route.IRouteProvider){
  
  $routeProvider.otherwise({
    template: "<home></home>"
  });
}