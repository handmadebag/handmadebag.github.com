'use strict';

angular.module('Product', [])
  .factory('ProductService', function(){
    var STORAGE_ID = 'gift-products';
    var products = [
      {
        id:0,name: 'product0', sku: 'sku1', price:1, tax:'1', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'},
          {url:'http://dnduploader.filkor.org/static/dropbox.png'},
          {url:'http://dnduploader.filkor.org/static/dropbox.png'},
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2
      },
      {
        id:1,name: 'product1', sku: 'sku4', price:4, tax:'4', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2

      },
      {
        id:2,name: 'product2', sku: 'sku4', price:4, tax:'4', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2

      },
      {
        id:3,name: 'product3', sku: 'sku3', price:3, tax:'3', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2

      },
      {
        id:4,name: 'product4', sku: 'sku2', price:2, tax:'2', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2

      },
      {
        id:5,name: 'product5', sku: 'sku2', price:2, tax:'2', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2

      },
      {
        id:6,name: 'product6', sku: 'sku2', price:2, tax:'2', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2

      },
      {
        id:7,name: 'product7', sku: 'sku2', price:2, tax:'2', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2

      },
      {
        id:8,name: 'product8', sku: 'sku2', price:2, tax:'2', imageUrl:'http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg',
        images: [
          {url:'http://dnduploader.filkor.org/static/dropbox.png'}
        ],
        newPrice: 2

      }


    ];

    var init = function() {
      var tmpProducts = JSON.parse(localStorage.getItem(STORAGE_ID));
      if (tmpProducts === null) {;
        localStorage.setItem(STORAGE_ID, JSON.stringify(products));
      }
    };

    init();

    return {
      get: function() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || []);
      },
      getProduct: function(id) {
        products = this.get();
        for (var i = 0; i < products.length; i += 1) {
          if (products[i].id === id) {
            return products[i];
          }
        }
      },
      save: function(product) {
        products = this.get();
        products.push(product);
        localStorage.setItem(STORAGE_ID, JSON.stringify(products));
      }
    };

  });
