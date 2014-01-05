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

        // if the url matches something like /pet/2 then this route
        // will fire off the PetCtrl controller (controllers.js)
        $routeProvider.when('/pet/:petId', {
            templateUrl: 'templates/pet.html',
            controller: 'PetCtrl'
        });

        $routeProvider.when('/commonContact/:commonContactId', {
            templateUrl: 'templates/commonContact.html',
            controller: 'CommonContactCtrl'
        });

        $routeProvider.when('/starredContact/:starredContactId', {
            templateUrl: 'templates/starredContact.html',
            controller: 'StarredContactCtrl'
        });

        // if none of the above routes are met, use this fallback
        // which executes the 'AppCtrl' controller (controllers.js)
        $routeProvider.otherwise({
            redirectTo: '/home'
        });

    });

