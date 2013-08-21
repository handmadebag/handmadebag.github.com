'use strict';

angular.module('Idea', [])
  .factory('IdeaService', ['$http', '$rootScope', function($http, $rootScope){
    var STORAGE_ID = 'gift-ideas';
    var products = [
      {id:0, name: 'Wedding'},
      {id:1, name: 'Birthday'}
    ];

    var init = function() {
      var tmpProducts = JSON.parse(localStorage.getItem(STORAGE_ID));
      if (tmpProducts === null) {;
        localStorage.setItem(STORAGE_ID, JSON.stringify(products));
      }
    };

    init();

    return {
      get: function(callback) {
        var ideas = [];
        $http({
          url: "/api/idea.json",
          method: "GET"
        }).success(function(data, status, headers, config) {
            return callback(data);
        }).error(function(data, status, headers, config) {

        });
        //return JSON.parse(localStorage.getItem(STORAGE_ID) || []);
      },
      getProduct: function(id) {
        products = this.get();
        for (var i = 0; i < products.length; i += 1) {
          if (products[i].id === id) {
            return products[i];
          }
        }
      },
      save: function(product) {
        products = this.get();
        products.push(product);
        localStorage.setItem(STORAGE_ID, JSON.stringify(products));
      }
    };

  }]);
