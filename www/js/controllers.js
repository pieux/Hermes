angular.module('hermes.controllers', [])

    .controller('AppCtrl', function ($scope) {
        // Main app controller, empty for the example
    })

    // Search Area controller
    .controller('SearchAreaCtrl', function ($scope) {
        $scope.searching = false;
    })

    // Common Contacts Area controller within Find Dpers tab
    .controller('CommonContactsAreaCtrl', function ($scope, CommonContacts) {
        // "CommonContacts" is a service returning mock data (service.js)
        $scope.commonContacts = CommonContacts.all();
    })

    // Common Contact Detail Page
    .controller('CommonContactCtrl', function ($scope, $routeParams, CommonContacts) {
        $scope.commonContact = CommonContacts.get($routeParams.commonContactId);
    })

    // Starred Contacts Area controller within Find Dpers tab
    .controller('StarredContactsAreaCtrl', function ($scope, StarredContacts) {
        $scope.starredContacts = StarredContacts.all();
    })

    // Contact Detail Page
    .controller('ContactCtrl', function ($scope, $routeParams, Contacts) {
        $scope.contact = Contacts.get($routeParams.contactId);

        $scope.star = function () {
            $scope.contact.starred = !$scope.contact.starred;
            // 异步地更新后台
        }

    })

    .controller('ProfileTabCtrl', function ($scope, Profile) {
        $scope.profile = Profile.value();
    })

    // 404 Page
    .controller('NotFoundCtrl', function ($scope, NotFound) {
        $scope.info = NotFound.value();
    })

;
