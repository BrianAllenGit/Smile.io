# Smile.io project

This is small Ember 2.14.2 project, with a Rails 5.1.3 backend. Make sure you have these specific versions of both Ember and Rails before continuing.


# Quick and dirty install:
   - To start, open a terminal, and clone the repo:
 ```
git clone https://github.com/BrianAllenGit/Smile.io.git
```
  - navigate into the newly created directory. From there, we will initialize and start the Rails server
```
cd bookstore-api/
rails db:migrate
rails db:seed
rails server --binding 0.0.0.0
```
  - Next, we will install and start the Ember app. In a seperate terminal / tab, navigate into the newly created directory again, and type the following.
```
cd bookstore/
npm install
ember server --proxy http://localhost:3000
```

And we're done! Navigate to [http://localhost:4200](http://localhost:4200) to see the running project!
