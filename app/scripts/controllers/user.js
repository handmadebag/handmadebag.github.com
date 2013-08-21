'use strict';

angular.module('User',[]);

function UserController($scope,UserService) {

  $scope.username = "";
  $scope.password = "";
  $scope.isLoggedIn = false;

  $scope.clearForm = function() {
    this.dismiss();
  };

  $scope.login = function(username, password) {
    if(UserService.login(username, password) !== null) {
      $scope.isLoggedIn = true;
      this.dismiss();
    }
    else {
      alert('Invalid username or password');
    }

  };

  $scope.logout = function () {
     //alert('logout user');
     UserService.logout();
     $scope.isLoggedIn = false;
  };

  $scope.createAccount = function() {
    alert('create user');
  };
}

UserController.$inject = ['$scope','UserService'];
