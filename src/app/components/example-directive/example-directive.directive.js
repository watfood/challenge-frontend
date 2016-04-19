/*
    this is simply an example of a directive that
    conforms to the eslint style guide
    and not necessarily a baseline to follow
*/
(function ExampleDirectiveDirective() {

    "use strict";

    angular
        .module("va.challenge.frontend")
        .directive("exampleDirective", ExampleDirective);

    /** @ngInject */
    function ExampleDirective(nv, d3) {

        /*
            nv and d3 are defined in index.constants.js as
            injectible dependencies instead as window global
        */

        var config = {
            restrict: "E",
            templateUrl: "app/components/example-directive/example-directive.html",
            controller: ExampleDirectiveController,
            controllerAs: "vm",
            bindToController: true,
            scope: true,
            link: postLink
        };

        return config;

        function postLink(scope, iEl, iAttrs, vm) {

            var dataWatcher = scope.$watch("vm.data", doSomething);

            scope.$on("$destroy", destroyWatchers);

            function doSomething(newValue) {

                var d3Format = d3.format("05d");
                var value = newValue[3].value;

                vm.rawValue = value;
                vm.formattedValue = d3Format(value);

            }

            function destroyWatchers() {

                dataWatcher();

            }

        }

    }

    /** @ngInject */
    function ExampleDirectiveController() {

        var vm = this;

        vm.data = [{
            label: "Item 1",
            value: 1000
        }, {
            label: "Item 2",
            value: 2000
        }, {
            label: "Item 3",
            value: 3000
        }, {
            label: "Item 4",
            value: 4000
        }, {
            label: "Item 5",
            value: 5000
        }];

    }

})();
