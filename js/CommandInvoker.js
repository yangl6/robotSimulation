//to implement the Command class
var CommandInvoker=function(){
	//to package the execute function in command class
	this.execute=function(command,robot,table,args){
		var isExecuted=command.execute(robot,table,args);
		return isExecuted;
	};
};