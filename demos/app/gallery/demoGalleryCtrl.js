
app.controller('demoGalleryCtrl', function($scope, modelService, $location) {

    $scope.models = {};
    modelService.load().then(function() {
        // Adding the public models to the scope
        for (modelKey in modelService.models) {
            if (!modelService.models[modelKey].unlisted) {
                $scope.models[modelKey] = modelService.models[modelKey];
            }
        }

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-115185862-1', {
            'page_title' : "Polyview Demo Gallery",
            'page_path': "/demos"
        });

    });
    
    $scope.openModel = function(modelKey) {
        $location.path('/' + modelKey);
    }
})