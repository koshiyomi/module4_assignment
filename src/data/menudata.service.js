(function () {
    'use strict';
    angular.module('data').service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        let service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (ApiBasePath + '/categories.json')
            }).then(function (response) {
                return response.data;
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            if(typeof categoryShortName !== "string"){
                return $http({
                    method: "GET",
                    url: (ApiBasePath + '/menu_items.json')
                }).then(function (response) {
                    return response.data.menu_items;
                });
            }else {
                return $http({
                    method: "GET",
                    url: (ApiBasePath + '/menu_items.json?category=' + categoryShortName)
                }).then(function (response) {
                    return response.data.menu_items;
                });
            }
        };
    }
})();