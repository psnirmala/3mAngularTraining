var module1=angular.module("firstDirectiveModule",[])
.directive("testDirective",function(){
	var obj={
			"template":"<h2>This is a test directive {{name}}</h2>",
			"scope":{
				"name":"="
			},
			"restrict": "EA"
	};
	return obj;
});

module1.directive("secondDirective", function(){
	var directiveDefinition={
			"templateUrl":"directives/directiveContent.html",
			"restrict":"E",
		"replace":true
	};
	return directiveDefinition;
});

module1.directive("thirdDirective", function(){
	var directiveDefinition={
			"template":"<h2><div>content of directive</div> <div ng-transclude></div></h2>",
			"restrict":"E",
			"replace":true,
			"transclude":true,
		"link":function(scope,element,attrs)
			{
				element.on("mouseenter",function(){
					element.css("color","red");
				});
				element.on("mouseleave",function(){
					element.css("color","black");
				});
			}
	};
	return directiveDefinition;
});
