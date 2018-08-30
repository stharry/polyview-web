
app.controller('demoItemCtrl', function($scope, modelService, $routeParams, $sce, $location) {

    modelService.load().then(function() {
        $scope.model = modelService.models[$routeParams.modelKey];

        if ($scope.model) {
            if (!$scope.model.colorVariations) {
                $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + $scope.model.claraId + "?tools=hide");
            } else {
                $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + $scope.model.colorVariations[0].claraId + "?tools=hide");
            }
        } else {
            // no such model, going back to demos page
            $location.path('/');
        }
    });

    $scope.updateModel = function(colorVariation) {
        $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + colorVariation.claraId + "?tools=hide");
    }    
});