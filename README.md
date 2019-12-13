Burger
Burger is a logger application that allows a user to input a burger name which is logged onto to the screen. The user can then choose to "Devour" each burger. Eaten burgers are listed for the user's reference.

Getting started
assuming node and npm are installed.
$ git clone https://github.com/singha53/burger.git
$ cd burger/
$ npm install
setting up SQL database
MySQL Community Server (https://dev.mysql.com/downloads/mysql/) export PATH=${PATH}:/usr/local/mysql/bin/

$ cd db
$ mysql -u root -p
Enter password:
mysql> source schema.sql
mysql> exit
create JawsDB remote database
$ cd burger/
$ heroku login
$ heroku create burger-uft
Navigate to heroku.com and login with your credentials
Find your Heroku app’s name in the dashboard. Click on it.
Look for the Add-Ons section in your app’s dashboard and type JawsDB in the input field. That should bring up the JawsDB MySQL add-on
Click on JawsDB MySQL and that should should bring up a modal asking you to provision a specific tier plan. (Note: require credit card information)
Make sure you select the free option, then click the Provision button.
You’ll know that Heroku set up your database when a JawsDB entry shows up in under the Add-ons section.
Click JawsDB MySQL to bring up the settings to your remote database. You’ll need this information later.
hooking your project JawsDB
Open the Graphical User Interface (GUI) software of your choice: Sequel Pro, MySQL Workbench, Valentina Studio or HeidiSQL.
Create a connection to the database
Enter host, username, password
open up schema.sql file, and change name of database to the one provided by JawsDB.
Deploy to heroku
$ git push heroku master
Walkthroughs
GIF

Programming/Scripting Languages
Front-end
HTML, CSS (Bootstrap)
Javascript (JQuery)
Back-end
JavaScript (Node.js, v8.11.2)
npm (v6.4.0) packages: routing (body-parser, express, path)
templating engine: handlebars
database: SQL
Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

Links
Repository: https://github.com/singha53/https://github.com/singha53/burger/
Deployed site: https://burger-uft.herokuapp.com/
Licensing
The code in this project is licensed under MIT license.
