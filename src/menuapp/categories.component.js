(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/templates/categories.component.html',
            bindings: {
                categories: '<'
            }
        });
})();