angular.module('hermes.controllers', [])

    .controller('AppCtrl', function ($scope) {
        // Main app controller, empty for the example
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
        });
    })

    // Common Contact Detail Page
    .controller('CommonContactCtrl', function ($scope, $routeParams, CommonContacts) {
        $scope.commonContact = CommonContacts.get($routeParams.commonContactId);
    })

    // Starred Contacts Area controller within Find Dpers tab
    .controller('StarredContactsAreaCtrl', function ($scope, StarredContacts) {
        $scope.starredContacts = StarredContacts.all();

        $scope.$on('tab.shown', function () {
            // Might do a load here
        });
        $scope.$on('tab.hidden', function () {
            // Might recycle content here
        });
    })

    // Starred Contact Detail Page
    .controller('StarredContactCtrl', function ($scope, $routeParams, StarredContacts) {
        $scope.starredContact = StarredContacts.get($routeParams.starredContactId);
    })

    .controller('ProfileTabCtrl', function ($scope, Profile) {
        $scope.profile = Profile.value();
    })

    // 404 Page
    .controller('NotFoundCtrl', function ($scope, NotFound) {
        $scope.info = NotFound.value();
    })

;
