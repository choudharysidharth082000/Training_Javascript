///<reference path="../../index.js" />

myapp.controller("controllerLogin", function($scope)
{
    $scope.front = "Hello world"
    const dataFrontPage = {
        frontTagline: "Watch anywhere. Cancel anytime ",
        tagLine:
          "Ready to watch? Enter your email to create or restart your membership.",
      };
      $scope.dataFrontPage = dataFrontPage;
})