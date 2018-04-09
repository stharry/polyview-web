
app.controller('demoItemCtrl', function($scope, modelService, $routeParams, $sce) {

    modelService.load().then(function() {
        $scope.model = modelService.models[$routeParams.modelKey];
        $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + $scope.model.claraId + "?tools=hide");
    });
    
});