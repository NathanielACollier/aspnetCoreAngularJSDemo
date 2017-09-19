'use strict';

routeConfig.$inject = ['$routeProvider',
  "$locationProvider"
];

export function routeConfig($routeProvider: ng.route.IRouteProvider,
  $locationProvider: ng.ILocationProvider){
  
    // fix for Internet Explorer
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix(''); // this is needed for AngularJS 1.6 and above see: https://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
/*
  $routeProvider.otherwise({
    template: "<home></home>"
  });
*/

  $routeProvider.when('/testControlsDatePicker',{
      template: "<test-controls-date-picker></test-controls-date-picker>"
  });

}