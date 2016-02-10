angular.module("ajaxServiceModule",[])
.service("employeeService", function($http) {
	this.getData=function(){
		var promise=$http.get("http://localhost:8090/AjaxPrj/test.jsp");
		return promise;
	};
	this.getData=function(params){
		
		var promise=$http.get("http://localhost:8090/AjaxPrj/test.jsp",{"params":params});
		return promise;
	};
	
	this.postData=function(params)
	{
		var promise=$http.post("http://localhost:8090/AjaxPrj/test.jsp","empName="+params.empName,{
			"headers":{
				"Content-Type":"application/x-www-form-urlencoded"
			}
		});
		return promise;
	}
});