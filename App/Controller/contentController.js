  app.controller("myCtrl",["$scope","listServer",function($scope,listServer){
      listServer.getData().then(function(data){
      	$scope.data = data.data;
      })
  }])