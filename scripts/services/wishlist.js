'use strict';

angular.module('Wishlist', [])
  .factory('WishlistService', ['ProductService',function(ProductService){
    var STORAGE_ID = 'gift-wishlists';
    var wishlists = [
      {
        id:0, name: 'list0', product_ids: [1,0,2]
      },
      {
        id:1, name: 'list1', product_ids: [1,0,2]
      },
      {
        id:2, name: 'list2', product_ids: [1,0,2]
      }
    ];

    var init = function() {
      var tmpWishlists = JSON.parse(localStorage.getItem(STORAGE_ID));
      if (tmpWishlists === null) {;
        localStorage.setItem(STORAGE_ID, JSON.stringify(wishlists));
      }
    };

    init();

    return {
      get: function() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || []);
      },
      getWishlist: function(id) {
        wishlists = this.get();
        var tmpWishlist;
        for (var i = 0; i < wishlists.length; i += 1) {
          tmpWishlist = wishlists[i];
          if (tmpWishlist.id === parseInt(id)) {
            return tmpWishlist;
          }
        }

        return null;
      },
      getTotalProductCount: function(id) {
        return this.getProducts(id).length;
      },
      getProducts: function(id, from, quantity) {
        var wishlist = this.getWishlist(id);
        var tmpProducts = [];

        if (wishlist === null) {
          return tmpProducts;
        }

        if ( typeof(from) === 'undefined' || typeof(quantity) === 'undefined') {
          from = 0;
          quantity = wishlist.product_ids.length;
        }

        for (var j = from; j < from+quantity; j += 1) {
          tmpProducts.push(ProductService.getProduct(wishlist.product_ids[j]));
        }

        return tmpProducts;
      },
      save: function(product) {
        wishlists = this.get();
        wishlists.push(product);
        localStorage.setItem(STORAGE_ID, JSON.stringify(wishlists));
      }
    };

  }]);
