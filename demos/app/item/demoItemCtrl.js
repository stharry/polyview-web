
app.controller('demoItemCtrl', function($scope, modelService, $routeParams) {

    modelService.load().then(function() {
        $scope.model = modelService.models[$routeParams.modelKey];
    });
    
});