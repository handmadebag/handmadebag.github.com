'use strict';

var giftPortalApp = angular.module('giftPortalApp', ['ui','Product','Wishlist','Friend','Category', 'Idea', 'User','$strap.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/user', {
        templateUrl: 'views/user/user-form.html',
        controller: 'UserController'
      })
      .when('/user/register', {
        templateUrl: 'views/user/user-register-form.html',
        controller: 'UserController'
      })
      .when('/user/setting', {
        templateUrl: 'views/user/settings/index.html',
        controller: 'UserSettingController'
      })
      .when('/product', {
        templateUrl: 'views/product/list.html',
        controller: 'ProductController'
      })
      .when('/product/add', {
        templateUrl: 'views/product/list.html',
        controller: 'ProductController'
      })
      .when('/wishlist/:id', {
        templateUrl: 'views/wishlist/show.html',
        controller: 'WishlistDetailController'
      })
      .when('/wishlist/my', {
        templateUrl: 'views/wishlist/my.html',
        controller: 'WishlistDetailController'
      })
      .when('/user/:id/wishlists', {
        templateUrl: 'views/wishlist/list.html',
        controller: 'WishlistController'
      })
      .when('/s/:term', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
      })
      .when('/friends', {
        templateUrl: 'views/friend/list.html',
        controller: 'FriendController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }])
  // config httpProvider
  .config(function($httpProvider){

    var interceptor = ['$rootScope', '$q', function(scope, $q){
      function success(response) {
        return response;
      }

      function error(response) {
        var status = response.status;

        if (status === 401) {
          var deferred = $q.defer();
          var req = {
            config: response.config,
            deferred: deferred
          };
          scope.requests401.push(req);
          scope.$broadcast('event:loginRequired');
          return deferred.promise;
        }

        return $q.reject(response);
      }

      return function(promise) {
        return promise.then(success, error);
      };

    }];

    $httpProvider.responseInterceptors.push(interceptor);

  })

  .run(['$rootScope', '$http','$location', function($rootScope, $http,$location){
    $rootScope.requests401 = [];

    $rootScope.$on('$routeChangeSuccess', function(e, cur, prev){
      $rootScope.$broadcast('MainController.changePath', {path:$location.path()});
    });
  }])
;
