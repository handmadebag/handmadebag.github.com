'use strict';

giftPortalApp.directive('ngNovWhenScrolledHorizontal', function() {
  return function(scope, elm, attr) {
        var raw = elm[0];
        elm.bind('scroll', function() {
            if (raw.scrollLeft + raw.offsetWidth >= raw.scrollWidth) {
                scope.$apply(attr.ngNovWhenScrolledHorizontal);
            }
        });
    };
});

giftPortalApp.directive('ngNovWhenScrolledVertical', function() {
  return function(scope, elm, attr) {
        var raw = elm[0];
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.ngNovWhenScrolledVertical);
            }
        });
    };
});