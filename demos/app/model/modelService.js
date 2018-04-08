
app.factory('modelService', function($http, $log) {
    var models = {};

    $http.get('app/data/models.json').then(function(response) {
        Object.assign(models, response.data);
    }, function(response) {
        $log.error("error in loading demo models data")
    })

    return {
        models: models
    }
})