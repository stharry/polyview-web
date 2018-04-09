
app.controller('demoItemCtrl', function($scope, $routeParams) {
    $scope.test = $routeParams.modelKey;
    //$scope.models = modelService.models;
});