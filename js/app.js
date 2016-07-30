angular.module('myApp', ['ngRoute'])


.config(function ($routeProvider)
{
  $routeProvider
  .when('/', {
    url:"/",
    templateUrl: 'templates/login.html',
    controller:'cont_index',
  })
})
.controller('cont_index',function($scope,$http){

  console.log("controller index charge");


})
