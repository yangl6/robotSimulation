var InputHandler=function(commandList){
	//private members
	var commandInvoker=new CommandInvoker();
	
	
	this.handleMoreCommands=function(commands,robot,table,tableEle){
		//to remove the beginning and ending spaces
		commands=commands.trim();
		var commandAr=commands.split(/[ ]+/ig);
		for(var i=0;i<commandAr.length;i++)
		{
			var command=commandAr[i];
			var isHandled=handleCommand(command,robot,table,tableEle);
			if(!isHandled)
			{
				break;
			}
			console.log(robot);
		}
	};
	
	
	//private section
	//to handle one command
	function handleCommand(command,robot,table,tableEle)
	{
		var isHandled=true;
		if(command.match(/^\d+,*\d+,[a-zA-Z]+$/i)!=null)
		{
			commandAr=command.split(/,/ig);
			x=parseInt(commandAr[0]);
			y=parseInt(commandAr[1]);
			facing=commandAr[2];
			var isPlaced=commandInvoker.execute(commandList[0],robot,table,[x,y,facing]);
			//to update the view
			if(isPlaced)
			{
				updateView(robot,table,tableEle);
			}
			else
			{
				isHandled=false;
			}
			
		}
		else if(command.match(/^Move$/i)!=null)
		{
			var isMoved=commandInvoker.execute(commandList[1],robot,table,[]);
			//to update the view
			if(isMoved)
			{
				updateView(robot,table,tableEle);
			}
			else
			{
				isHandled=false;
			}
		}
		else if(command.match(/^Left$/i)!=null)
		{
			var isTurned=commandInvoker.execute(commandList[2],robot,table,[]);
			if(isTurned)
			{
				addDegree("robotText",robot.facing);
			}
			else
			{
				isHandled=false;
			}
		}
		else if(command.match(/^Right$/i)!=null)
		{
			var isTurned=commandInvoker.execute(commandList[3],robot,table,[]);
			if(isTurned)
			{
				addDegree("robotText",robot.facing);
			}
			else
			{
				isHandled=false;
			}
		}
		else if(command.match(/^Report$/i)!=null)
		{
		    var reportText=commandInvoker.execute(commandList[4],robot,table,[]);
		    if(reportText!=false)
		    {
		    	alert(reportText);
		    }
		    else
			{
				isHandled=false;
			}
		}
		else if(command.match(/^Place$/i)!=null)
		{
			//skip
		}
		else
		{
			alert("Invalid command: "+command);
			isHandled=false;
		}
		return isHandled;
	}
	
	//to add degree classes for a element
	function addDegree(textId,facing)
	{
		var textEle=document.getElementById(textId);
		console.log(facing);
		if(facing.match(/^East$/i)!=null)
		{
			textEle.className="text-center";
			textEle.style.transform="rotate(90deg)";
		}
		else if(facing.match(/^South$/i)!=null)
		{
			textEle.className="text-center";
			textEle.style.transform="rotate(180deg)";
		}
		else if(facing.match(/^West$/i)!=null)
		{
			textEle.className="text-center";
			textEle.style.transform="rotate(270deg)";
		}
		else
		{
			textEle.className="text-center";
			textEle.style.transform="";
		}
	}


	//to change the background color
	function changeStyle(cell)
	{
		cell.style.backgroundColor="gold";
		cell.style.border="solid";
	}

	//to update the view when the robot has moved
	function updateView(robot,table,tableEle)
	{
		//to update the view
		//clear the original content
		var prevCoor=table.calcPosition(table.x,table.y)
		var prevCell=tableEle.rows[prevCoor.row].cells[prevCoor.cell];
		prevCell.innerHTML="";
		changeStyle(prevCell);
		
		//to update the new content and the table coordinate as the position of R has changed
		table.x=robot.x;
		table.y=robot.y;
		var newCoor=table.calcPosition(robot.x,robot.y);
		var newCell=tableEle.rows[newCoor.row].cells[newCoor.cell];
		newCell.innerHTML="<div id=\"robotText\"><b>T</b></div>";
		changeStyle(newCell);
		addDegree("robotText",robot.facing);
	}
	
	
};





