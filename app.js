var app = angular.module('app', [])
.config(function($routeProvider) {
    $routeProvider.when('/', {

            templateUrl : 'pages/home.html',

            controller  : 'mainController'

        })
        .when('/about', {

            templateUrl : 'pages/about.html',

            controller  : 'aboutController'

        })
        .when('/contact', {

            templateUrl : 'pages/contact.html',

            controller  : 'contactController'

        });
})
.run(['$rootScope', '$location', function($rootScope, $location) {
   /* 监听路由的状态变化 */
   $rootScope.$on('$routeChangeStart', function(evt, next, current){
   		// console.log(current);
   		// console.log(next);
     // console.log('route begin change: '+$location.path());
     console.log($location.path());
   }); 
   $rootScope.$on('$routeChangeSuccess', function(evt, current, previous) {
   		// console.log(current);
   		// console.log(previous);
     console.log('route have already changed ：'+$location.path());
   }); 
}])
.controller('mainController', function($scope) {
   $scope.message = 'Everyone come and see how good I look!';
})
.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
})
.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});