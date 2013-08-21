'use strict';

angular.module('Product', ['$rootScope','$scope','$location', 'ProductService']);

function ProductController($rootScope, $scope, $location, ProductService) {

  $scope.views = {
    addProductModal: 'views/product/add-product-modal.html'
  };

  $scope.headers = [
    {name: 'id', label: 'Id', hidden: true},
    {name: 'name', label: 'Name', hidden: false},
    {name: 'sku', label: 'Sku', hidden: false},
    {name: 'price', label: 'Price', hidden: false},
    {name: 'tax', label: 'Tax', hidden: false}
  ];

  var validateObjects = {
    productNameRequired:  {isValidated: false, message:'required'},
    productNameMaxlength: {isValidated: false, message:'maxlength'}
  };

  $scope.validateProductName = function() {
    if ($scope.addProductForm['product[name]'].$modelValue !== '') {
      if ($scope.addProductForm['product[name]'].$error.required) {
        return validateObjects.productNameRequired;
      } else if ($scope.addProductForm['product[name]'].$error.maxlength) {
        return validateObjects.productNameMaxlength;
      }
    }

    return {
      isValidated: true,
      message: ''
    };
  };

  $scope.visibleHeaders = [];

  $scope.getFilteredHeaders = function() {
    if ($scope.visibleHeaders.length === 0) {
      for (var i = 0; i < $scope.headers.length; i++) {
        if ($scope.headers[i].hidden === false) {
          $scope.visibleHeaders.push($scope.headers[i]);
        }
      };
    }
    return $scope.visibleHeaders;
  }

  $scope.sortColumn = 'name';
  $scope.toggleSort = function(index) {
    var filteredHeader = $scope.visibleHeaders[index].name;
    if ($scope.sortColumn === filteredHeader) {
      $scope.reverse = !$scope.reverse;
    }
    $scope.sortColumn = filteredHeader;
  }

  $scope.currentAction = { create: true, save: false };

  $scope.products = ProductService.get();
  $scope.images = [
      {name:'1l',url:'http://daydealx-com.s3.amazonaws.com/files/sm_thumb/iph5_kirigami_night_w_v2_sm_thumb.jpg'},
        {name:'1l',url:'http://www.cases.com/product_images/l/767/BZ23134_1__64740_tiny.jpg'},
        {name:'1l',url:'http://www.cases.com/product_images/o/208/SN826774_2__20498_tiny.jpg'},
        {name:'1l',url:'http://www.jnjstore.us/store/media/catalog/product/cache/1/thumbnail/50x/9df78eab33525d08d6e5fb8d27136e95/0/0/0012_5_7.jpg'}
      ];

  $scope.productDescriptionEditor = $('#new-product-description').wysihtml5({'stylesheets':false});

  $scope.removeProduct = function() {
  }

  $scope.closeModal = function() {
    $('#add-product-modal').modal('hide');
  }

  var resetNewProduct = function() {
    $scope.newProduct = {};
  }

$scope.createProduct = function() {
    resetCurrentAction();
    $scope.currentAction.create = true;
    $scope.modalShown = true;
  }

  $scope.addProduct = function() {
    var product = {
      name: $scope.newProduct.name,
      sku: $scope.newProduct.sku,
      price: $scope.newProduct.price,
      tax: $scope.productDescriptionEditor.val()
    }
    ProductService.save(product);
    $scope.products = ProductService.get();
    resetNewProduct();
  }

  $scope.addProductAndClose = function() {
    $scope.addProduct();
    $scope.closeModal();
  }

  $scope.addProductAndStay = function() {
    $scope.addProduct();
  }

  var resetCurrentAction = function() {
    for(var action in $scope.currentAction) {
      $scope.currentAction[action] = false;
    }
  }

  $scope.editProduct = function(product) {
    resetCurrentAction();
    $scope.currentAction.save = true;
    $scope.newProduct = angular.copy(product);
    $scope.modalShown = true;
  }

  var saveProduct = function() {
    var p = {};
    for (var i = $scope.products.length - 1; i >= 0; i--) {
      p = $scope.products[i];
      if (p.id === $scope.newProduct.id) {
        $scope.products[i] = angular.copy($scope.newProduct);
        resetNewProduct();
        break;
      };
    };
  }

  $scope.saveProductAndClose = function() {
    saveProduct();
    $scope.closeModal();
  }


}
