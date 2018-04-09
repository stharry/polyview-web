
app.factory('modelService', function($http, $log, $q) {
    var models = {};
    var wasEverLoaded = false;
    
    function load() {
        var async = $q.defer();

        // Loading the data from the json only once
        if (wasEverLoaded) {
            async.resolve();
        } else {
            $http.get('app/data/models.json').then(function(response) {
                wasEverLoaded = true;
                Object.assign(models, response.data);
                async.resolve();
            }, function(response) {
                $log.error("error in loading demo models data");
                async.reject();
            });
        }

        return async.promise;
    }


    return {
        models: models,
        load: load
    }
})