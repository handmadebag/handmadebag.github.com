'use strict';

giftPortalApp.factory('PartialService', function() {
  var partials = {
    homepageFeatured: 'views/homepage/featured.html',
    sharedFooter: 'views/shared/footer.html',
    productGrid: 'views/product/grid.html',
    productModal: 'views/product/view-product-modal.html',
    sharedTopNavigation: 'views/shared/top-navigation.html',
    sharedAffixNavigation: 'views/shared/affix-navigation.html'
  };

  return {
    get: function() {
      return partials;
    }
  };
});
