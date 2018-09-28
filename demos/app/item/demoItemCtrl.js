
app.controller('demoItemCtrl', function($scope, modelService, $routeParams, $sce, $location) {

    modelService.load().then(function() {
        $scope.model = modelService.models[$routeParams.modelKey];

        if ($scope.model) {
            if (!$scope.model.colorVariations) {
                $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + $scope.model.claraId + "?tools=hide");
            } else {
                $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + $scope.model.colorVariations[0].claraId + "?tools=hide");
            }

            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-115185862-1', {
                'page_title' : "Polyview Demo - " + $scope.model.name,
                'page_path': "/demos/#!" + $location.path()
            });
        
        } else {
            // no such model, going back to demos page
            $location.path('/');
        }
    });

    $scope.updateModel = function(colorVariation) {
        $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + colorVariation.claraId + "?tools=hide");
    }    
});