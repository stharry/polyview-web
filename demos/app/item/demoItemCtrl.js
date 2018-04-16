
app.controller('demoItemCtrl', function($scope, modelService, $routeParams, $sce, $location) {

    modelService.load().then(function() {
        $scope.model = modelService.models[$routeParams.modelKey];

        if ($scope.model) {
            $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + $scope.model.claraId + "?tools=hide");
        } else {
            // no such model, going back to demos page
            $location.path('/');
        }
    });
    
});