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
        .state('rsvp.last', {
            url: '/last',
            templateUrl: 'views/rsvp/rsvp-last.html'
        })
        .state('rsvp.first', {
            url: '/first',
            templateUrl: 'views/rsvp/rsvp-first.html'
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