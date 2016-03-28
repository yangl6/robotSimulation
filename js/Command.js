//to place the robot
var place=function(robot,table,args){
	if(args.length<3)
	{
		return false;
	}
	
	var x=args[0];
	var y=args[1];
	var facing=args[2];
	return robot.place(x,y,facing,table);
	
};

//to move the robot
var move=function(robot,table,args){
	return robot.move(table);
};

//to turn the robot right
var right=function(robot,table,args){
	return robot.turnRight();
};

//to turn the robot left
var left=function(robot,table,args){
	return robot.turnLeft();
};

//to report the robot status
var report=function(robot,table,args){
	return robot.report();
};

//This is a parent command, it is like an interface in Java
var Command=function(execute){
	this.execute=execute;
};


//the place command
var PlaceCommand=function(){
	return new Command(place);
};

//the move command
var MoveCommand=function(){
	return new Command(move);
};

//the left command
var LeftCommand=function(){
	return new Command(left);
};


//the right command
var RightCommand=function(){
	return new Command(right);
};

//the report command
var ReportCommand=function(){
	return new Command(report);
};





