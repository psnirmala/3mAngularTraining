angular.module("thirdServiceModule", [])
.provider("thirdService", function() {
		this.setMessage=function(message){
			this.message=message;
		};
		var self=this;
		
		this.$get=function(){
			var svc={};
			svc.getMessage=function(){
				return self.message;
			};
			return svc;
		};
		
});