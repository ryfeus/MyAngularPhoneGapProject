'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/courses.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/events.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/contacts.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/dining.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/commentbox.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/news.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/gallery.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/admissions.html'});
        $routeProvider.when('/view9', {templateUrl: 'partials/shuttles.html'});
        $routeProvider.otherwise({redirectTo: '/'});
  }]);
