var module=angular.module("filterModule", [])
.filter("reverse", function() {
	var filterFunction=function(inputString,terminationCharacter)
	{
		console.log(terminationCharacter);
		var result="";
		for(var i=0;i<inputString.length;i++){
			result=inputString.charAt(i)+result;
		}
		var character=terminationCharacter||'';
		if(result.length>0){
		result=result+character;
		}
		return result;
	}
	return filterFunction;
	 
});
module.filter("exclude",function(){
	var filterFunction=function(employees,empName)
	{
		var result=[];
		for(var i=0;i<employees.length;i++){
			if(employees[i].name!=empName){
				result.push(employees[i]);
			}
		}
		return result;
	}
	return filterFunction;
});