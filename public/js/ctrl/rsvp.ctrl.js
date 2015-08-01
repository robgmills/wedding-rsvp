angular.module('rsvp.controller', []).controller('RsvpController', ['$scope','$state','InviteService',
    function($scope, $state, InviteService) {

    $state.transitionTo('rsvp.name');

    $scope.invite;
    $scope.formData = {};

    $scope.search = function() {
        InviteService
            .search($scope.formData.last, $scope.formData.first)
            .then(function(resp){
                $scope.invite = resp.data;
                $state.transitionTo('rsvp.coming');

            }, function(resp) {
                switch(resp.status) {
                    case 404:
                        $state.transitionTo('rsvp.notfound');
                        break;
                    default:
                        $state.transitionTo('error');
                }

            });
    };

    $scope.next = function(next) {
        $state.transitionTo(next);
    };

    $scope.countOptions = function() {
        const options = [];
        for(var i = 1; i<=$scope.invite.guests.length; i++) {
            options.push(i);
        }
        return options;
    };

    $scope.submit = function() {
        InviteService
            .update($scope.invite)
            .then(function(resp){
                $state.transitionTo('rsvp.thanks');
            }, function(resp) {
                $state.transitionTo('error');
            });
    }
}]);