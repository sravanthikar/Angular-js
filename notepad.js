var app=angular.module("notepadapp",[]);
app.controller("notepadctrl",function($scope)
{
$scope.message="";
$scope.left = function() {
        return 100 - $scope.message.length;
    };
$scope.save=function(){
	alert("+message");
};
$scope.clear=function(){
	$scope.message="";
}

});