'use strict';

angular.module('User');

function UserSettingController($scope,UserService) {
  $scope.links = [
    {id:0, iconClass:'icon-pencil', text:'Profile', partial:'views/user/settings/profile.html'},
    {id:1, iconClass:'icon-envelope', text:'Email', partial:'views/user/settings/email.html'},
    {id:2, iconClass:'icon-user', text:'Password', partial:'views/user/settings/password.html'},
    {id:3, iconClass:'icon-gift', text:'Wishlist', partial:''},
    {id:4, iconClass:'icon-plus', text:'Follow', partial:''},
    {id:4, iconClass:'icon-heart', text:'Friend', partial:''}
  ];

  $scope.currentLink = $scope.links[0];

  $scope.user = UserService.getUser(0);
  $scope.newUser = angular.copy($scope.user);

  $scope.changeLink = function(id) {
    $scope.currentLink = $scope.links[id];
  };

  $scope.saveUserInfo = function() {
    UserService.save($scope.newUser);
    alert('update user info success');
  };

}

UserSettingController.$inject = ['$scope','UserService'];
