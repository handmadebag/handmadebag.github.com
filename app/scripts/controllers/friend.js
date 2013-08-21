'use strict';

angular.module('Friend', ['$scope','$location', 'FriendService']);

function FriendController($scope, $location, FriendService) {

  $scope.friends = FriendService.get();

  var counter = 0;
  $scope.loadMore = function() {

      var moreFriends = FriendService.getMore();

      for (var i = 0; i < moreFriends.length; i++) {
        $scope.friends.push(moreFriends[i]);
      };

  };
  $scope.loadMore();

  $scope.selectedFriends = [];

  $scope.selectFriend = function($index) {
    var i = inSelectedFriends($index);
    if ( i === -1) {
      $scope.selectedFriends.push($index);
    } else {
      $scope.selectedFriends.splice(i,1);
    }
  }

  $scope.selectedIndex = undefined;

  $scope.setSelectedIndex = function($index) {
    $scope.selectedIndex = $index;
  }

  $scope.getLiClass = function($index) {
    return inSelectedFriends($index) !== -1 ? 'selected-friend' : 'not-selected-friend';
  }

  var inSelectedFriends = function(id) {
    for(var i=0;i<$scope.selectedFriends.length;i++) {
        if($scope.selectedFriends[i] === id) {
            return i;
        }
    }
    return -1;
  }

  $scope.emptySelectedFriends = function() {
    $scope.selectedFriends.splice(0,$scope.selectedFriends.length);
  }

	$scope.addGiftIdeaToFriends = function() {
    $scope.modalShown = true;
    debugger;
  }
}
