
app.controller('demoGalleryCtrl', function($scope, modelService) {
    $scope.models = modelService.models;
})