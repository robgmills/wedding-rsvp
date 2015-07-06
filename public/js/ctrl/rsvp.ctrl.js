angular.module('rsvp-controller', []).controller('RsvpController', function($scope, $state) {

    $scope.steps = ['rsvp.last','rsvp.first','rsvp.coming','rsvp.count','rsvp.confirm','rsvp.thanks'];
    $scope.currentStep = 0;

    $state.transitionTo($scope.steps[$scope.currentStep]);

    // To be replaced with the record from MongoDB
    $scope.formData = {
        'allowed': 3
    };

    $scope.next = function() {
        $scope.currentStep++;
        $state.transitionTo($scope.steps[$scope.currentStep]);
    };

    $scope.countOptions = function() {
        const options = [];
        for(var i = 1; i<=$scope.formData.allowed; i++) {
            options.push(i);
        }
        return options;
    }
});