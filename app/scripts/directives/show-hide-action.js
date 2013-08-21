'use strict';

giftPortalApp.directive('ngNovShowHideAction', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      $(element).hover(
      	function(){
      		$(element).find('.action-button').show();
      	}, 
      	function(){
      		$(element).find('.action-button').hide();
      	}
      );
    }
  };
});
