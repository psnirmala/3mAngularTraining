angular.module("testServiceModule", [])
.factory("testService",function(){
	var object={};
	object.customers=[{
		"id":1,
		"name":"Rajiv",
		"balance":2000
	},
	{
	"id":2,
	"name":"Arun",
	"balance":5000
	}];

	object.getData=function()
	{
				
		return this.customers;
	};
	object.addData=function(customer)
	{
		this.customers.push(customer);
	};
	
	
	return object;
});