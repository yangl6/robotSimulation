# Robot Simulation
## Robot simulation on a 5X5 table top 

### How to run and build
This application is simply a web application that is mainly made of javascript, HTML, Angular. You can run this code by installing a local server such as Apache, Node.js etc, and accessing "index.html" via the browswer (better chrome). 

### Project Structure 
1. Folder "commands" is comprised of several txt files, each of which has a series of commands. These files are used for the input of command from file.
2. Folder "CSS" is made of some style sheet.
3. Folder "jasmine" are the Jasmine Unit Testing framework, which contains comprehensive unit testing for objects and methods that are used in the code. You can access the framework from either the link "localhost/robotAngular/jasmine/SpecRunner.html" (Note that This is only an example, the real path depends upon the computer folder structure.) or the link on the index page (Jasmine Test Page).
4. Folder "js" contains the javascript files.
5. You can access the application from index.html.

### Description of the application
1. This application provides two options of command input. 1) You can input by entering the command in option 1 and press the button called "Enter Command". You can either type one command and immediately press the button or type a sequence of commands and then press the button. Both cases will work for you. 2) Second option is that you could input by seleting and reading a file that contains commands for this application. For this option, what is worth mentioning is that the file selector will only accept text files, and thus you'd better name the command file with the extention of "txt".Again, there is some example files of commands in the folder "commands". Hope you enjoy:).

2. There is another section called "Test Data", where there are a list of test data. You can simply click these data to see the result. Remember that for the first four commands, you can try to click them first before clicking other "Place robot" commands so that you could check if these commands are ignored or not. To view the details of unit testing, please click the link under this section "Jasmine Test Page".

3. On the right hand side, there is a 5X5 squre table, and the bold letter "T" represent an object of Robot. The robot can move and turn around. 

Enjoy playing around. 

