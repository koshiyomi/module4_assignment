(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['MenuDataService', 'categories'];

    function categoriesController(MenuDataService, categories) {
        let categoriesCtrl = this;
        categoriesCtrl.categories = categories;
    }
})();