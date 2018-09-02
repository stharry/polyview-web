
app.controller('demoGalleryCtrl', function($scope, modelService, $location) {

    $scope.models = {};
    modelService.load().then(function() {
        // Adding the public models to the scope
        for (modelKey in modelService.models) {
            if (!modelService.models[modelKey].unlisted) {
                $scope.models[modelKey] = modelService.models[modelKey];
            }
        }
    });
    
    $scope.openModel = function(modelKey) {
        $location.path('/' + modelKey);
    }
})