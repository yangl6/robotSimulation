var Table=function(size){
	this.x=0; //to track the coordinates of the label
	this.y=0; 
	this.size=size;
};

//to calculate corresponding indexes (i,j) on the table with a given x, y of robot
Table.prototype.calcPosition=function(x,y){
	var i,j;
	i=this.size-1-y; //row index
	j=x; //cell index;
	return {
		row: i,
		cell: j
	};
};

//to validate the position of robot on the table
Table.prototype.checkPosition=function(x,y){
	if(x<0 || y<0 || x>this.size-1 || y>this.size-1)
	{
		return false;
	}
	else
	{
		return true;
	}
}