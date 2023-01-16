///<reference path="../../app.js" />
//creating the routes for the app
myapp.config(function ($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('    ', {
      url: '/login',
      templateUrl: 'src/pages/login.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'src/pages/signup.html',
    });
});
