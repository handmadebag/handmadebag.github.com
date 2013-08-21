'use strict';

giftPortalApp.controller( 'MainController',
    ['$location','$scope','ProductService','PartialService',
    function($location, $scope,ProductService, PartialService) {
  $scope.modal = {content: 'Hello Modal', saved: false};    
  $scope.paths = [
    {label: 'Home', url: '#/', classValue: ''},
    {label: 'Products', url: '#/product', classValue: ''}
  ];

  $scope.partials = PartialService.get();
  $scope.activePage = {};

  $scope.products = ProductService.get();

  $scope.changeActivePage = function(path) {
    $scope.activePage.classValue = '';
    $scope.activePage = path;
    $scope.activePage.classValue = 'active';
  };

  $scope.moveToSearch = function($event) {
    var searchValue = $('#search-input').val();
    if ($event.keyCode === 13 && searchValue !== '') {
      $location.path('/s/' + searchValue);
    }
  };

  $scope.$on('MainController.changePath', function(e, args){
    for (var i = 0; i < $scope.paths.length; i += 1) {
      if ($scope.paths[i].url === '#' + args.path) {
        $scope.changeActivePage($scope.paths[i]);
      }
    }
  });

}]);
