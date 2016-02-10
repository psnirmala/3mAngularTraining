angular.module("moduleRestClientModule",["ngResource"])
.service("moduleRestService", function($resource) {
	 var resource=$resource("rest/module/:id",{"id":"@_id"},{
		 "update":{
			 "method":"PUT"
		 }
	 });
	this.addModule=function(module)
	{
		var obj=resource.save(module);
		return obj.$promise;
	};
});