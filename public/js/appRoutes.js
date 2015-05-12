'use strict';

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        // home page
        .when('/asd', {
            templateUrl: '/views/indexw.jade',
            controller: 'MainController'
        });
    $locationProvider.html5Mode(true);
}]);