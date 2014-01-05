angular.module('hermes.directives', [])
    .directive('ngcFocus', ['$parse', function ($parse) {
        return function (scope, element, attr) {
            var fn = $parse(attr['ngcFocus']);
            element.bind('focus', function (event) {
                scope.$apply(function () {
                    fn(scope, {$event: event});
                });
            });
        }
    }])
    .directive('ngcBlur', ['$parse', function ($parse) {
        return function (scope, element, attr) {
            var fn = $parse(attr['ngcBlur']);
            element.bind('blur', function (event) {
                scope.$apply(function () {
                    fn(scope, {$event: event});
                });
            });
        }
    }])
;
