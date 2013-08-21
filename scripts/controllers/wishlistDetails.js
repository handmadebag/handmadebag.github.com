'use strict';

angular.module('Wishlist', ['$rootScope','$route','$scope','$location','WishlistService']);

function WishlistDetailController($rootScope, $route, $scope, $location, WishlistService) {

  var addMoreQuantity        = 1;
  $scope.currentProductIndex = 0;
  $scope.products = [];

  $rootScope.$on('$routeChangeSuccess', function(scope, newRoute, current) {
    $scope.products = WishlistService.getProducts($route.current.params.id,
      $scope.currentProductIndex, addMoreQuantity);
  });

  $scope.getTotalProductCount = function() {
    return WishlistService.getTotalProductCount($route.current.params.id);
  };
  $scope.totalProductCount = $scope.getTotalProductCount();

  $scope.loadMore = function(from, quantity) {
    if (typeof(from) === 'undefined' || typeof(quantity) === 'undefined') {
      from = $scope.currentProductIndex;
      quantity  = addMoreQuantity;
    }
    var moreProducts = WishlistService.getProducts(
      $route.current.params.id, from, quantity
    );
    for (var i = 0; i < moreProducts.length; i += 1) {
      $scope.products.push(moreProducts[i]);
    }
    $scope.currentProductIndex = $scope.products.length - 1;
    $scope.currentProductCount = $scope.products.length;
  };

  $scope.loadMore($scope.currentProductIndex, addMoreQuantity);

}
