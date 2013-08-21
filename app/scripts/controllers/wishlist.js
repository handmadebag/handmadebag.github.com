'use strict';

angular.module('Wishlist', ['$scope','$location', 'WishlistService']);

function WishlistController($scope, $location, WishlistService) {
  $scope.wishlists = WishlistService.get();
}