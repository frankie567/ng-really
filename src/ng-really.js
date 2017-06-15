'use strict';

angular.module('ng-really', []).directive('ngReally', function ($parse, $timeout) {
  return {
    restrict: 'A',
    scope: {
      confirmLabel: '=ngReallyConfirmLabel',
      confirmedAction: '&ngReallyConfirmedAction',
      timeout: '=ngReallyTimeout'
    },
    link: function (scope, element) {
      var defaultLabel = element.html();
      var clickedOnce = false;
      var actionHandler = $parse(scope.confirmedAction);

      function resetConfirmation() {
        clickedOnce = false;
        element.html(defaultLabel);
      }

      element.bind('click', function() {
        if (clickedOnce) {
          actionHandler();
          resetConfirmation();
        }
        else {
          clickedOnce = true;
          element.html(scope.confirmLabel);
          if (scope.timeout) {
            $timeout(function() {
              resetConfirmation();
            }, scope.timeout);
          }
        }
      });
    }
  };
});
