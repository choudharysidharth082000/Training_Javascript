const configngRoute = myapp.config('$routeProvider', function($routeProvider){
    $routeProvider.otherwise({
        redirectTo: "/home"
    })
})