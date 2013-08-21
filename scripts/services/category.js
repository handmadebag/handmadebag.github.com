/*
 * global localStorage: false, console:false, $:false, angular:false
 * */

'use strict';

angular.module('Category', [])
  .factory('CategoryService', function(){
    var STORAGE_ID = 'gift-categories';

    var services = [
      {id:0, name: 'Clothes'},
      {id:1, name: 'Computer'}
    ];

    var init = function() {
      var tmpServices = JSON.parse(localStorage.getItem(STORAGE_ID));
      if (tmpServices === null) {;
        localStorage.setItem(STORAGE_ID, JSON.stringify(services));
      }
    };

    init();

    return {
      get: function() {
        return services;
      },
      getProduct: function(id) {
        services = this.get();
        for (var i = 0; i < services.length; i += 1) {
          if (services[i].id === id) {
            return services[i];
          }
        }
      },
      save: function(product) {
        services = this.get();
        services.push(product);
        localStorage.setItem(STORAGE_ID, JSON.stringify(services));
      }
    };

  });
