angular.module('rsvp-routes', []).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'views/home.html'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'views/error.html'
        })
        .state('rsvp', {
            url: '/rsvp',
            templateUrl: 'views/rsvp/rsvp-index.html',
            controller: 'RsvpController'
        })
        .state('rsvp.name', {
            url: '/name',
            templateUrl: 'views/rsvp/rsvp-name.html'
        })
        .state('rsvp.notfound', {
            url: '/notfound',
            templateUrl: 'views/rsvp/rsvp-notfound.html'
        })
        .state('rsvp.coming', {
            url: '/coming',
            templateUrl: 'views/rsvp/rsvp-coming.html'
        })
        .state('rsvp.count', {
            url: '/count',
            templateUrl: 'views/rsvp/rsvp-count.html'
        })
        .state('rsvp.confirm', {
            url: '/confirm',
            templateUrl: 'views/rsvp/rsvp-confirm.html'
        })
        .state('rsvp.thanks', {
            url: '/thanks',
            templateUrl: 'views/rsvp/rsvp-thanks.html'
        });

    $urlRouterProvider.otherwise('');
}]);