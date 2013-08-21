'use strict';

angular.module('Friend', [])
  .factory('FriendService', function(){
    var STORAGE_ID = 'gift-friends';
    var friends = [
      {
        id:0, name: 'Friend Name01'
      },
      {
        id:1, name: 'Friend Name02'
      },
      {
        id:2, name: 'Friend Name03'
      },
      {
        id:3, name: 'Friend Name01'
      },
      {
        id:4, name: 'Friend Name02'
      },
      {
        id:5, name: 'Friend Name03'
      }
    ];

    var more_friends = [
      {
        id:0, name: 'Friend More01'
      },
      {
        id:1, name: 'Friend More02'
      },
      {
        id:2, name: 'Friend More03'
      },
      {
        id:3, name: 'Friend More01'
      },
      {
        id:4, name: 'Friend More02'
      },
      {
        id:5, name: 'Friend More03'
      }
    ];




    var init = function() {
      var tmpFriends = JSON.parse(localStorage.getItem(STORAGE_ID));
      if (tmpFriends === null) {;
        localStorage.setItem(STORAGE_ID, JSON.stringify(friends));
      }
    };



    init();

    return {
      get: function() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || []);
      },
      save: function(product) {
        friends = this.get();
        friends.push(product);
        localStorage.setItem(STORAGE_ID, JSON.stringify(friends));
      },
      getMore: function() {
        return more_friends;
      }
    };

  });
