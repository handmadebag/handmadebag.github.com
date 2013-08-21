'use strict';

giftPortalApp.directive('ngNovTooltip', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      $(element).tooltip();
    }
  };
});
