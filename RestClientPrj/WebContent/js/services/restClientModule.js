angular.module("restClientModule",["ngResource"])
.service("firstRestService", function($resource) {
	 var resource=$resource("rest/emp/:id",{"id":"@_id"},{
		 "update":{
			 "method":"PUT"
		 }
	 });
	this.getEmployeeData=function(empId)
	{
		/*var employee;
		var promise=resource.get({"id":empId});
		promise.then(function(response){
			employee=response;
		});
		return employee;*/
		var obj=resource.get({"id":empId});
		return obj.$promise;
	};
	
	this.getAllEmployeesData=function()
	{
		var obj=resource.query();
		return obj.$promise;
	};
	this.addEmployee=function(data)
	{
		var obj=resource.save(data);
		return obj.$promise;
	};
	this.updateEmployee=function(empId,data)
	{
	var obj=resource.update({"id":empId},data);
	return obj.$promise;
	};
	this.deleteEmployee=function(empId)
	{
	var obj=resource.delete({"id":empId});
	return obj.$promise;
	};
	
});