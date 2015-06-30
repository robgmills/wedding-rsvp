angular.module('rsvp-routes', []).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            //controller: 'RsvpController'
        })
        .state('rsvp.filter', {
            url: '/rsvp/filter',
            templateUrl: 'views/rsvp/filter.html'
        });

    $urlRouterProvider.otherwise("/");
}]);