describe("Robot",function(){
	var myRobot;
	var table;
	
	beforeEach(function(){
		myRobot=new Robot(0,0);
		table=new Table(5);
	});
	
	describe("Place the robot",function(){
		it("Should be able to place the robot (3,2,West)",function(){
			console.log(myRobot);
			expect(myRobot.place(3,2,"WEST",table)).toBeTruthy();
		});
		
		it("Should not be able to place the robot (5,2,West)",function(){
			var result=myRobot.place(5,2,"WEST",table);
			expect(result).not.toBeTruthy();
		});
		
		it("Should not be able to place the robot (4,5,EAST)",function(){
			var result=myRobot.place(5,2,"East",table);
			expect(result).not.toBeTruthy();
		});
	});
	
	describe("When placing robot did not occur",function(){
		it("Failed to move the robot",function(){
			expect(myRobot.move(table)).toBe(false);
		});
		
		it("Failed to turn the robot left or right",function(){
			expect(myRobot.turnLeft()).toBe(false);
			expect(myRobot.turnRight()).toBe(false);
		});
		
		it("Failed to report the robot's position",function(){
			expect(myRobot.report()).toBe(false);
		});
	});
	
	describe("When placing robot did occur",function(){
		beforeEach(function(){
			myRobot.place(3,2,"North",table);
		});
		
		it("Should be able to move the robot",function(){
			expect(myRobot.move(table)).toBe(true);
		});
		
		it("Should be able to turn the robot left or right",function(){
			expect(myRobot.turnLeft()).toBe(true);
			expect(myRobot.turnRight()).toBe(true);
		});
		
		it("Should be able to report the robot's position",function(){
			expect(myRobot.report()).toMatch(/\d+ \d+ [A-Za-z]+/i);
		});
		
		
		
	});
	
	describe("When the robot arrives at the side of the table--(4,4,North) in this example",function(){
		beforeEach(function(){
				myRobot.place(4,4,"North",table);
		});
		
		it("When the robot moves forward, cannot move as the robot reaches the uppder side of the table",function(){
			expect(myRobot.move(table)).toBe(false);
		});
		
		it("When the robot turns right and moves forward, cannot move as the robot reaches the right side of the table",function(){
			myRobot.turnRight();
			expect(myRobot.move(table)).toBe(false);
		});
		
		
		it("When the robot turns left and moves forward, should be able to move",function(){
			myRobot.turnLeft();
			expect(myRobot.move(table)).toBe(true);
		});
		
	});
	
	describe("When the robot faces North, testing turn left and right",function(){
		beforeEach(function(){
			myRobot.place(2,2,"North",table);
		});
		
		it("If the robot turns right, should face east",function(){
			myRobot.turnRight();
			expect(myRobot.facing).toMatch(/^east$/i);
		});
		
		it("If the robot turns right twice, should face south",function(){
			myRobot.turnRight();
			myRobot.turnRight();
			expect(myRobot.facing).toMatch(/^south$/i);
		});
		
		it("If the robot turns right triple times, should face west",function(){
			myRobot.turnRight();
			myRobot.turnRight();
			myRobot.turnRight();
			expect(myRobot.facing).toMatch(/^west$/i);
		});
		
		it("If the robot turns right four times, should face North",function(){
			myRobot.turnRight();
			myRobot.turnRight();
			myRobot.turnRight();
			myRobot.turnRight();
			expect(myRobot.facing).toMatch(/^north$/i);
		});
		
		it("If the robot turns left three times, should face East",function(){
			myRobot.turnLeft();
			myRobot.turnLeft();
			myRobot.turnLeft();
			expect(myRobot.facing).toMatch(/^east$/i);
		});
		
		it("If the robot turns left twice, should face south",function(){
			myRobot.turnLeft();
			myRobot.turnLeft();
			
			expect(myRobot.facing).toMatch(/^south$/i);
		});
		
		it("If the robot turns left once, should face west",function(){
			myRobot.turnLeft();
			
			expect(myRobot.facing).toMatch(/^west$/i);
		});
	});
	
	describe("Test if table.checkPosition runs with expected arguments",function(){
		beforeEach(function(){
			spyOn(table,"checkPosition");
			myRobot.place(3,2,"North",table);
		});
		
		it("Runs with (3,2) and should be called with (3,2) in checkPosition function",function(){
			expect(table.checkPosition).toHaveBeenCalledWith(3,2);
		});
		
		it("Runs with (3,2) and should not be called with (3) in checkPosition function",function(){
			expect(table.checkPosition).not.toHaveBeenCalledWith(3);
		});
	});
	
	
	
	it("Test if table.calcPosition runs correctly as expected",function(){
		expect(table.calcPosition(3,2).row).toBe(2);
		expect(table.calcPosition(3,2).cell).toBe(3);
	})
	
	//to test the 
	
});