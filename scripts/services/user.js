'use strict';

angular.module('User', [])
  .factory('UserService', ['$http', function($http){
    var STORAGE_ID = 'gift-users';

    var users = [
      {id:0, name: 'hung', password:'', email:'hunghuynh@gmail.com'},
      {id:1, name: 'HuyDog', password:'huy123', email:'huy@gmail.com'}
    ];

    var init = function() {
      var tmpUsers = JSON.parse(localStorage.getItem(STORAGE_ID));
      if (tmpUsers === null) {;
        localStorage.setItem(STORAGE_ID, JSON.stringify(users));
      }
    };

    init();

    return {
      get: function(callback) {
        return users;
      },

      getUser: function(id) {
        for (var i = 0; i < users.length; i += 1) {
          if (users[i].id === id) {
            return users[i];
          }
        }
      },

      login: function(username,password) {
        for (var i = 0; i < users.length; i += 1) {
          if (users[i].name === username && users[i].password === password) {
            return users[i].id;
          }
        }
        return null;
      },

      logout: function(user) {

      },

      create: function(user) {

      },

      save: function(user) {
        //user = this.get();
        users.push(user);
        localStorage.setItem(STORAGE_ID, JSON.stringify(users));
      }
    };

  }]);
