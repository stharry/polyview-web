
app.controller('demoItemCtrl', function($scope, modelService, $routeParams, $sce, $location, deviceDetector) {

    modelService.load().then(function() {
        $scope.model = modelService.models[$routeParams.modelKey];

        if ($scope.model) {
            if (!$scope.model.colorVariations) {
                $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + $scope.model.claraId + "?tools=hide");
            } else {
                $scope.model.claraEmbedId = $sce.trustAsResourceUrl("https://clara.io/player/v2/" + $scope.model.colorVariations[0].claraId + "?tools=hide");
                $scope.model.selectedVariation = $scope.model.colorVariations[0];
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
        $scope.model.selectedVariation = colorVariation;
    }    

    $scope.showAppleArQuickLook = function() {
        // First checking if there is an ios format file available (usdz)
        // Then, if the file is available, checking if we are running on a Safari 12 browser
        if (isSafariFormatAvailable() && isSafari12()) {
            return true;
        } else {
            return false;
        }
    }

    function isSafariFormatAvailable() {
        if (!$scope.model.colorVariations) {
            // regular model, cheking if we have a usdz file
            return $scope.model.usdz ? true : false
        } else {
            // model with variations, checking that the selected variation has a usdz file
            return $scope.model.selectedVariation.usdz ? true : false;
        }
    }

    $scope.getUsdzFile = function() {
        if (!$scope.model.colorVariations) {
            return $scope.model.usdz;
        } else {
            return $scope.model.selectedVariation.usdz;
        }
    }

    function isSafari12() {
        if (deviceDetector.os === "ios" && deviceDetector.browser === "safari" && parseInt(deviceDetector.browser_version) >= 12) {
            return true;
        } else {
            return false;
        }
    }
});