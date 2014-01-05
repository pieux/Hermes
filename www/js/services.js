angular.module('hermes.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Pets', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var pets = [
            { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
            { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
            { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
            { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
        ];

        return {
            all: function () {
                return pets;
            },
            get: function (petId) {
                // Simple index lookup
                return pets[petId];
            }
        }
    })

    .factory('CommonContacts', function () {
        // Some faking testing data
        var commonContacts = [
            { id: 0, title: '点评小秘书', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
            { id: 1, title: 'IT 值班', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
            { id: 2, title: '运维值班', description: 'Everyone likes turtles.' },
            { id: 3, title: '员工服务团队', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
        ];

        return {
            all: function () {
                return commonContacts;
            },
            get: function (commonContactId) {
                // Simple index lookup
                return commonContacts[commonContactId];
            }
        }
    })

    .factory('StarredContacts', function () {
        // Some faking testing data
        var starredContacts = [
            { id: 0, title: 'Aron Wang', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
            { id: 1, title: 'Tonson Tang', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
            { id: 2, title: 'Jason Ma', description: 'Everyone likes turtles.' },
            { id: 3, title: 'Pieux Xi', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
        ];

        return {
            all: function () {
                return starredContacts;
            },
            get: function (starredContactId) {
                // Simple index lookup
                return starredContacts[starredContactId];
            }
        }
    })
;
