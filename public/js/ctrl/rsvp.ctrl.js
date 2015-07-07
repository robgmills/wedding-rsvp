angular.module('rsvp.controller', []).controller('RsvpController', ['$scope','$state','InviteService', function($scope, $state, InviteService) {

    $state.transitionTo('rsvp.last');

    $scope.invite = {};
    $scope.formData = {};

    $scope.search = function() {
        InviteService
            .search($scope.formData.last, $scope.formData.first)
            .then(function(data, status, headers){

                if( data.length > 1 ) {
                    alert("We seem to be having a problem!  Please email rsvp@robandjax.com for help.");
                }

                $scope.invite = results[0];

            },function(data, status, headers){
                alert("We seem to be having a problem!  Please email rsvp@robandjax.com for help.");
            });

        $state.transitionTo('rsvp.coming');
    }

    $scope.next = function(next) {
        $state.transitionTo(next);
    };

    $scope.countOptions = function() {
        const options = [];
        for(var i = 1; i<=$scope.formData.allowed; i++) {
            options.push(i);
        }
        return options;
    }
}]);