var app=angular.module('mySpa',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when("/aboutme",{
		controller:"aboutmeController",
		templateUrl:"about.html"
	});
	$routeProvider.when("/contactme",{
		controller:"contactController",
		templateUrl:"contact.html"
	});
})