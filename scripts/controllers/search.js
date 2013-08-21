'use strict';

angular.module('Search', ['$scope', 'ProductService', 'CategoryService', 'IdeaService']);

function SearchController($scope, ProductService, CategoryService, IdeaService) {

  $scope.products = ProductService.get();
  $scope.categories = CategoryService.get();
  IdeaService.get(function(data) {
    $scope.ideas = data;  
  });


  $scope.search = function() {
  };

  $scope.calculatePercent = function(price, newPrice) {
  };

}
