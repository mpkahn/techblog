#  HW 14 - Tech Blog


## Description

This application is a express based tech blog that allows users to create an account and upload tech projects they are working on and post them to the main page. Anyone can view published projects, but only users can edit or delete their own projects. 


## Installation

* Navigate to https://github.com/mpkahn/techblog and clone repository to local machine.

* To run locally: 
* Install npm (`npm i`). 
* Install any other necessary modules
* Ensure correct information in .env file
* Either initialize database in mysql workbench ~or~ utilize ``mysql -u root -p`` (followed by your password)
* Once NPM is installed, run "npm start" to launch application and go to localhost/3005 in browser

## Usage 

* Should be hosted at https://lit-oasis-64674.herokuapp.com/

* On site, view projects on main page (if any)
* Click log in at the top
* Navigate to register new account
* After creating account, go to "my projects" and click "new post" to create project postings
* View projects on main page or edit them in "my projects"
* Click on other projects to leave comments


## Credits

* node.js and its documentation on file systems https://nodejs.org/api/fs.html & https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
npm js, 
* Express
* Sequelize
* MYSQL https://dev.mysql.com/doc/refman/8.0/en/keywords.html
* Google material theming https://material.io/design/material-theming/implementing-your-theme.html#typography
* Heroku
* Screencastify


## License

MIT License

Copyright (c) [2021] [Michael Kahn]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

