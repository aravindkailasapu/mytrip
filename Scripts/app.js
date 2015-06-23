var app = angular.module('userTrip', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',
function ($stateProvider,$urlRouterProvider) {

        TripSubscriberTemplate = {
            name: 'TripSubscriberTemplate',
            url: '/TripSubscriber',
            views: {
                '': {
                    controller: 'TripSubscriberController',
                    templateUrl: '../TripSubscriber.html'
                }
            }

        },
        TripTemplate = {
            name: 'TripTemplate',
            url: '/Trip',
            views: {
                '': {
                    controller: 'TripController',
                    templateUrl: '../Trip.html'
                }
            }

        },
        UserTripTemplate = {
            name: 'UserTripTemplate',
            url: '/UserTrip',
            views: {
                '': {
                    controller: 'RegisterTripController',
                    templateUrl: '../RegisterTrip.html'
                }
            }

        },
        HomeTemplate = {
            name: 'Home',
            url: '/Home',
            views: {
                '': {
                    templateUrl: '../Home.html'
                }
            }

        },
        DefaultTemplate = {
            name: 'default',
            url: '/',
            views: {
                '': {
                    templateUrl:'../Home.html'
                }
            }
        }
        $urlRouterProvider.otherwise('/Home');
        $stateProvider
            .state(TripSubscriberTemplate)
            .state(TripTemplate)
            .state(UserTripTemplate)
            .state(HomeTemplate)
            .state(DefaultTemplate);

    }
]);

