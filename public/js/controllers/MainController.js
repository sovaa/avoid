'use strict';

angular.module('avoidApp', []).controller('MainController', function($scope) {
    $scope.tagline = 'bajsbajsbajs';

    $scope.gamedata = {
        wood: 10,
        meat: 0,
        population: 1
    };

    $scope.stokeFire(function() {
        alert("fire");
    });
});
