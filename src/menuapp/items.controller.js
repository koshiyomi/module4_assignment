(function() {
    'use strict';

    angular.module('MenuApp').controller('itemsController', itemsController);

    itemsController.$inject = ['$stateParams', 'items'];

    function itemsController($stateParams, items) {
        let itemsCtrl = this;
        itemsCtrl.items = items;
        itemsCtrl.categoryName = $stateParams.categoryName;
    }
})();
