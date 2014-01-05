angular.module('hermes.controllers', [])

    .controller('AppCtrl', function ($scope) {
        // Main app controller, empty for the example
    })

    // A simple controller that fetches a list of data
    .controller('PetsTabCtrl', function ($scope, Pets) {
        // "Pets" is a service returning mock data (services.js)
        $scope.pets = Pets.all();

        $scope.$on('tab.shown', function () {
            // Might do a load here
        });
        $scope.$on('tab.hidden', function () {
            // Might recycle content here
        });
    })

    // Common Contacts Area controller within Find Dpers tab
    .controller('CommonContactsAreaCtrl', function ($scope, CommonContacts) {
        // "CommonContacts" is a service returning mock data (service.js)
        $scope.commonContacts = CommonContacts.all();

        $scope.$on('tab.shown', function () {
            // Might do a load here
        });
        $scope.$on('tab.hidden', function () {
            // Might recycle content here
        })

    })


    // A simple controller that shows a tapped item's data
    .controller('PetCtrl', function ($scope, $routeParams, Pets) {
        // "Pets" is a service returning mock data (services.js)
        $scope.pet = Pets.get($routeParams.petId);
    });
