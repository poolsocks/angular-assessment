angular.module("devApp", [ui.router])
.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      controller: "homeCtrl",
      templateUrl: "/views/home.html"
    })
    .state("blog", {
      url: "/blog",
      controller: "blog",
      templateUrl: "/views/blog.html"
    })
    .state("about", {
      url: "/about",
      controller: "detailsCtrl",
      templateUrl: "/views/about.html"
    })
    .state("shop", {
      url: "/shop",
      controller: "detailsCtrl",
      templateUrl: "/views/shop.html"
    })

});