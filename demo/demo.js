var app = angular.module('demo', ['ngSanitize', 'frankie567.ng-really']);

app.controller('DemoController', ['$scope', function($scope) {
    $scope.confirmedAction = function() {
        alert('Delete!');
    };
}]);
