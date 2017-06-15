var app = angular.module('demo', ['ngSanitize', 'ngReally']);

app.controller('DemoController', ['$scope', function($scope) {
    $scope.confirmedAction = function() {
        alert('Delete!');
    };
}]);
