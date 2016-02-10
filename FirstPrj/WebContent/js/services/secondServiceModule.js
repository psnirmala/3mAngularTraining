angular.module("secondServiceModule", [])
.service("secondService", function() {
	this.getMessage=function(){
		return "Welcome";
	};
});
