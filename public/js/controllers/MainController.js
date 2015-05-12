'use strict';

angular.module('MainController', []).controller('MainController', function($scope) {
    $scope.tagline = 'bajsbajsbajs';

    $scope.gamedata = {
        wood: 10,
        meat: 0,
        population: 1
    };

    $scope.stokeFire(function() {
        $scope.cooldown($("button#stokeFire"));
    });

    $scope.cooldown(function(btn) {
        alert("cooooldoooown");/*
        var cd = btn.data("cooldown");
        if(cd > 0) {
            milliseconds = cd * 1000;
            if (Engine.options.doubleTime){
                milliseconds /= 2;
            }

            $('div.cooldown', btn).stop(true, true).width("100%").animate({width: '0%'}, milliseconds, 'linear', function() {
                var b = $(this).closest('.button');
                b.data('onCooldown', false);
                if(!b.data('disabled')) {
                    b.removeClass('disabled');
                }
            });
            btn.addClass('disabled');
            btn.data('onCooldown', true);
        }*/
    });
});
