var app = angular.module('app', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);//去掉url里面的#
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl : 'pages/home.html',
            controller  : 'mainController',
            cache: true
        })
        .state('about', {
            url:'/about',
            templateUrl : 'pages/about.html',
            controller  : 'aboutController',
            cache: true
        })
        .state('contact', {
            url:'/contact',
            templateUrl : 'pages/contact.html',
            controller  : 'contactController',
            cache: true
        })
}])
.run(['$rootScope', '$window', '$location', '$log','$templateCache', function ($rootScope, $window, $location, $log,$templateCache) {  
    var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);  
    function stateChangeSuccess($rootScope) {  
        // $templateCache.removeAll();    
    } 
}])
.controller('mainController', function($scope,$stateParams) {
   $scope.message = 'Everyone come and see how good I look!';
   $scope.input = '';
   console.log($stateParams);
})
.controller('aboutController', function($scope,$state) {
    $scope.message = 'Look! I am an about page.';
    // $scope.jump = function($event){
    //      $state.go('home', {data:'wenzhen'});
    // }
})
.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});