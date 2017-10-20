var app  = angular.module("app",["ui.router"]);
  app.config(function($stateProvider,$urlRouterProvider){
  	 $stateProvider
  	     .state("index",{
  	     	url:"/index",
  	     	templateUrl:"./App/View/_index.html",
  	     })
  	     .state("tab",{
  	     	url:"/tab",
  	     	templateUrl:"./App/View/_tab.html"
  	     })
  	  $urlRouterProvider.otherwise("/index");
  })