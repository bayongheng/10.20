app.factory("listServer",function($q,$http){
	 var def = $q.defer()
	var obj = {
         getData:function(){
         	$http.get("./Data/data.json")
         	     .then(function(data){
         	     	def.resolve(data);
         	     })
         	     return $q.promis;
         }
	}
	return obj
})