(function () {
    'use strict';
    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/templates/items.component.html',
            bindings: {
                items: '<'
            }
        });
})();