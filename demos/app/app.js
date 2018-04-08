
var app = angular.module('demosApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : 'app/gallery/demoGallery.html',
      controller: 'demoGalleryCtrl'
    })
});

