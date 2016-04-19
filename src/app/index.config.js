(function IndexConfig() {

    "use strict";

    angular
        .module("va.challenge.frontend")
        .config(config);

    /** @ngInject */
    function config($logProvider) {

        $logProvider.debugEnabled(true);

    }

})();
