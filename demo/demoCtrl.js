
demoApp.controller('demoCtrl', function($scope, $sce) {
    var models = {
        "": {
            name: "Office Chair",
            claraId: "0f0e7e13-c57b-471d-b3b6-4091bd051ab0"
        }
    }

    $scope.modelName = "Office Chair";
    $scope.claraEmbedUrl = "https://clara.io/player/v2/0f0e7e13-c57b-471d-b3b6-4091bd051ab0?tools=hide";
    $scope.claraEmbedUrl = $sce.trustAsResourceUrl($scope.claraEmbedUrl);
});