
app.controller('demoGalleryCtrl', function($scope, modelService, $location) {

    modelService.load().then(function() {
        $scope.models = modelService.models;
    });
    
    $scope.openModel = function(modelKey) {
        $location.path('/' + modelKey);
    }
})