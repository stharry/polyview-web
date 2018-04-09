
app.controller('demoGalleryCtrl', function($scope, modelService, $location) {
    $scope.models = modelService.models;

    $scope.openModel = function(modelKey) {
        $location.path('/' + modelKey);
    }
})