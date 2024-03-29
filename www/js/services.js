angular.module('hermes.services', [])

    .factory('CommonContacts', function () {
        // Some faking testing data
        var commonContacts = [
            { id: 0, title: '点评小秘书', avatar: "img/avatar.png", description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
            { id: 1, title: 'IT 值班', avatar: "img/avatar.png", description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
            { id: 2, title: '运维值班', avatar: "img/avatar.png", description: 'Everyone likes turtles.' },
            { id: 3, title: '员工服务团队', avatar: "img/avatar.png", description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
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
            { id: 0, name: 'Aron Wang', avatar: "img/avatar.png", description: '我们都是好孩子!', department: '业务系统部', mobile: '18613145120', starred: true },
            { id: 1, name: 'Tonson Tang', avatar: "img/avatar.png", description: '我们都是好孩子!', department: '业务系统部', mobile: '18613145120', starred: false },
            { id: 2, name: 'Jason Ma', avatar: "img/avatar.png", description: '我们都是好孩子!', department: '业务系统部', mobile: '18613145120', starred: true }
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

    .factory('Contacts', function () {
        // Some faking testing data
        var contacts = [
            { id: 0, name: 'Aron Wang', avatar: "img/avatar.png", description: '我们都是好孩子!', department: '业务系统部', mobile: '18613145120', starred: true },
            { id: 1, name: 'Tonson Tang', avatar: "img/avatar.png", description: '我们都是好孩子!', department: '业务系统部', mobile: '18613145120', starred: false },
            { id: 2, name: 'Jason Ma', avatar: "img/avatar.png", description: '我们都是好孩子!', department: '业务系统部', mobile: '18613145120', starred: true }
        ];

        return {
            all: function () {
                return contacts;
            },
            get: function (contactId) {
                return contacts[contactId];
            }
        }
    })

    .factory('NotFound', function () {
        var value = {
            title: "正在开发ing",
            description: "恭喜你，你是第13位发现这块处女地的勇士!",
            foodImg: "img/foodImg.jpg",
            foodIntro: "鲜花饼是一款以云南特有的食用玫瑰花入料的酥饼，是以“花味、云南味”为特色的云南经典点心代表。鲜花饼在云南当地烘焙品牌大都均有销售，其中以嘉华饼屋最富盛名。每年4月，等待鲜花饼的上市早已成为当地人民的共同期待，排着长队等待购买新鲜上市的鲜花饼早已成为司空见惯的景象。"
        };

        return {
            value: function () {
                return value;
            }
        }
    })

    .factory('Profile', function () {
        var value = {
            name: "Pieux Xi",
            description: "初级程序员/单身自由万岁",
            avatar: "img/profile.png",
            department: "业务系统部",
            mobile: "18616348933"
        };

        return {
            value: function () {
                return value;
            }
        }
    })
;
