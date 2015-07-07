angular.module('rsvp.controller', []).controller('RsvpController', ['$scope','$state','InviteService',
    function($scope, $state, InviteService) {

    $state.transitionTo('rsvp.last');

    $scope.invite = {};
    $scope.formData = {};

    $scope.search = function() {
        InviteService
            .search($scope.formData.last, $scope.formData.first)
            .then(function(data, status, headers){
                $scope.invite = data;
                $state.transitionTo('rsvp.coming');

            },function(data, status, headers){
                $state.transitionTo('error');
            });
    }

    $scope.next = function(next) {
        $state.transitionTo(next);
    };

    $scope.countOptions = function() {
        const options = [];
        for(var i = 1; i<=$scope.invite.guests.length; i++) {
            options.push(i);
        }
        return options;
    }
}]);