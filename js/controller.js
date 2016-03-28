var app=angular.module("robotApp",[]);

//to add directive for this app
app.directive('customOnChange', function() {
	  return {
	    restrict: 'A', //only attribute can access this directive
	    link: function (scope, element, attrs) {
	      var onChangeHandler = scope.$eval(attrs.customOnChange);
	      element.bind('change', onChangeHandler);
	    }
	  };
});


//the controller part
app.controller("robotCtrl",function($scope){
	$scope.rows=["","","","",""];
	$scope.cols=["","","","",""];
	$scope.stdCommand="";
	
	var myRobot=new Robot(0,0);
	var table=new Table(5);
	var inputHandler=new InputHandler();
	
	console.log(myRobot);
	console.log(table);
	
	//to define the enterCommand function
	$scope.enterCommand=function(){
		var tableEle=document.getElementById("table");
		//var stdInputEle=document.getElementById("stdInput");
		var commands=$scope.stdCommand;
		inputHandler.handleMoreCommands(commands,myRobot,table,tableEle);
	};
	
	//to define the function when the file selector change
	$scope.fileChange=function(){
		if (window.File && window.FileReader && window.FileList && window.Blob) 
		{
			  console.log(event.target.files);
			  var f=event.target.files[0]; //i.e. only choose the first file in the array as there is only one file selected
			  console.log(f);
			  if(f)
			  {
				  
				  var r = new FileReader();
				  console.log(r);
				  //to set the call back function
			      r.onload = function() { 
				      var text=r.result;
				      document.getElementById("fileResult").innerHTML=text;
				      var tableEle=document.getElementById("table");
				      inputHandler.handleMoreCommands(text,myRobot,table,tableEle);
			      }
				  
				  r.readAsText(f);
			  }
			  else
			  {
				  alert("Failed to load the file");
			  }
		} 
		else 
		{
			  alert('The File APIs are not fully supported in this browser.');
		}
		
	};
	
	
	//for test data
	$scope.testDataAr=["MOVE","LEFT","RIGHT","REPORT","PLACE 3,2,WEST REPORT","PLACE 5,2,WEST REPORT","PLACE 4,5,EAST REPORT","PLACE 0,0,NORTH MOVE REPORT","PLACE 0,0,NORTH LEFT REPORT",
	                   "PLACE 1,2,EAST MOVE MOVE LEFT MOVE REPORT","PLACE 4,4,NORTH MOVE REPORT","PLACE 4,4,NORTH RIGHT MOVE REPORT","PLACE 4,4,NORTH LEFT MOVE REPORT",
	                   "PLACE 2,2,NORTH RIGHT REPORT","PLACE 2,2,NORTH RIGHT RIGHT REPORT","PLACE 2,2,NORTH RIGHT RIGHT RIGHT REPORT","PLACE 2,2,NORTH RIGHT RIGHT RIGHT RIGHT REPORT",
	                   "PLACE 2,2,NORTH LEFT REPORT","PLACE 2,2,NORTH LEFT LEFT REPORT","PLACE 2,2,NORTH LEFT LEFT LEFT REPORT"];
	
	$scope.testData=function(data){
		var tableEle=document.getElementById("table");
		//var stdInputEle=document.getElementById("stdInput");
		var commands=data;
		inputHandler.handleMoreCommands(commands,myRobot,table,tableEle);
	}
});




