Feature: To validate the login functionality of application
Scenario Outline: To validate the login functionality with valid credentials
Given The user should be in login page
When The user has to click the signin link and then enter the "<emailid>" "<pass>" then click the signin button
Then the user should be in homepage
Examples:
|emailid                         |pass|
|charulathavadivel02@gmail.com |Charulatha13@|
|charulatha@gmail.com |Charulatha3@|


Scenario Outline: To validate the login functionality with invalid credentials
Given The user should be in login page
When The user has to click the signin link and enter the "<email>"then click signin button
Then the user should get a invalid message 
Examples:
|email  |                      
|charugmail.com |           
|jayagmail.com   |           

