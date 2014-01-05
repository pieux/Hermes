// angular.module is a global place for creating, registering and retrieving Angular modules
// 'hermes' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array or 'requires'
// 'hermes.services' is found in services.js
// 'hermes.controllers' is found in controllers.js
angular.module('hermes', ['ionic', 'ngRoute', 'ngAnimate', 'hermes.services', 'hermes.controllers'])

    .config(function ($compileProvider) {
        // Needed for routing to work
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })

    .config(function ($routeProvider, $locationProvider) {

        // Set up the initial routes that our app will respond to.
        // These are then tied up to our nav router which animates and
        // updates a navigation bar
        $routeProvider.when('/home', {
            templateUrl: 'templates/app.html',
            controller: 'AppCtrl'
        });

        $routeProvider.when('/', {
            redirectTo: '/home'
        });

        $routeProvider.when('/commonContact/:commonContactId', {
            templateUrl: 'templates/commonContact.html',
            controller: 'CommonContactCtrl'
        });

        $routeProvider.when('/starredContact/:starredContactId', {
            templateUrl: 'templates/starredContact.html',
            controller: 'StarredContactCtrl'
        });

        $routeProvider.when('/contact/:contactId', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactCtrl'
        });

        $routeProvider.when('/404', {
            templateUrl: 'templates/404.html',
            controller: 'NotFoundCtrl'
        });

        // if none of the above routes are met, use this fallback
        $routeProvider.otherwise({
            redirectTo: '/404'
        });

    });

