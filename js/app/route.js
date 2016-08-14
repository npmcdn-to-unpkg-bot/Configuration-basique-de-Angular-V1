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
