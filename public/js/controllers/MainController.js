'use strict';

angular.module('avoidApp', []).controller('MainController', function() {
    this.tagline = 'bajsbajsbajs';

    this.gamedata = {
        wood: 10,
        meat: 0,
        population: 1
    };

    this.stokeFire = function() {
        alert('fire');
    };
});