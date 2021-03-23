# README
This is a playground for testing concepts for the development of the EvaDB frontend

Prerequisites:
* Ruby 2.6 (there may be issues with the mysql adapter in ruby 2.7), I recommend using rvm to install ruby
* node.js, current version
* yarn
* MariaDB or MySQL

Install:
* git clone
* In the project folder
- bundle install
- yarn install
- edit config/database.yml to connect to your database
- rails db:create
- rails db:migrate
- To fill the database with test data you may use rake vcf:populate

Run:
* rails s
* connect browser to localhost:3000
