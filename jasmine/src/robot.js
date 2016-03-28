var Robot=function(x,y){
	this.x=x;
	this.y=y;
	this.facing=null;
	
	//to place the robot
	this.place=function(x,y,facing,table){
		var isPlaced=placeRobot(x,y,facing,this,table);
		if(!isPlaced)
		{
			alert("Please place the robot in a valid position or give a valid facing value!");
		}
		return isPlaced;
	};
	
	//to move the robot
	this.move=function(table){
		var col,row;
		var direction=this.facing;
		if(direction==null)
		{
			alert("Please place the robot first.");
			return false;
		}
		
		if(direction.match(/^North$/i)!=null)
		{
			row=this.y+1;
			col=this.x;
		}
		else if(direction.match(/^West$/i)!=null)
		{
			col=this.x-1;
			row=this.y;
		}
		else if(direction.match(/^South$/i)!=null)
		{
			row=this.y-1;
			col=this.x;
		}
		else if(direction.match(/^East$/i)!=null)
		{
			row=this.y;
			col=this.x+1;
		}
		var isPlaced=placeRobot(col,row,direction,this,table);
		if(!isPlaced)
		{
			alert("The robot cannot move forward any more! x: "+this.x+"y: "+this.y);
		}
		return isPlaced;
	};
	
	this.turnLeft=function(){
		if(this.facing==null)
		{
			alert("Please place the robot first.");
			return false;
		}
		if(this.facing.match(/^North$/i)!=null)
		{
			this.facing="West";
		}
		else if(this.facing.match(/^West$/i)!=null)
		{
			this.facing="South";
		}
		else if(this.facing.match(/^South$/i)!=null)
		{
			this.facing="East";
		}
		else if(this.facing.match(/^East$/i)!=null)
		{
			this.facing="North";
		}
		//addDegree("robotText",this.facing);
		return true;
	};
	
	this.turnRight=function(){
		if(this.facing==null)
		{
			alert("Please place the robot first.");
			return false;
		}
		
		if(this.facing.match(/^North$/i)!=null)
		{
			this.facing="East";
		}
		else if(this.facing.match(/^West$/i)!=null)
		{
			this.facing="North";
		}
		else if(this.facing.match(/^South$/i)!=null)
		{
			this.facing="West";
		}
		else if(this.facing.match(/^East$/i)!=null)
		{
			this.facing="South";
		}
		//addDegree("robotText",this.facing);
		return true;
	};
	
	this.report=function(){
		if(this.facing==null)
		{
			alert("Please place the robot first.");
			return false;
		}
		return this.x+" "+this.y+" "+this.facing;
	};
	
	
	/****************************************************************************************************/
	/*************************Private Functions**********************************************************/
	/****************************************************************************************************/
	
	//to place the robot
	function placeRobot(x,y,facing,robot,table)
	{
		if(table.checkPosition(x,y)==false)
		{
			return false;
		}
		
		if(facing.match(/^North$/i)==null && facing.match(/^West$/i)==null && facing.match(/^East$/i)==null && facing.match(/^South$/i)==null)
		{
			
			return false;
		}
		
		robot.x=x; //col
		robot.y=y; //row
		robot.facing=facing;
		return true;
	}
};