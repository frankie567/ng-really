var app = angular.module('demo', ['ngSanitize', 'ng-really']);

app.controller('DemoController', ['$scope', function($scope) {
    $scope.confirmedAction = function() {
        alert('Delete!');
    };
}]);
