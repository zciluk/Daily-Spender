

## Daily Spender

Project for writing down your own spendings. Main feature is calculation of "Daily available budget" which is representing a value of money which you can spend everyday to keep up with your available budget. That said, it is easier for the user to hold on on few purchases, and clear to see the benefits of saving money. <br>

Project comes with client side written in React.js with usage of Grommet UI. Client side is covered with test written in Jest and Enzyme (to run, write <b>"npm test"</b>. To see the coverage run <b>"npm test -- --coverage"</b>).<br>

It comes also with backend written in Node (Express) with MongoDB as database. Environment can be quickly re-reacted by using Docker container. To use just run command <b>"docker-compose up --build"</b>". The server will be running on [http://localhost:3001](http://localhost:3001). 

TODOs:
- tests for the back-end part 
- e2e tests
- improve handling API requests from client side (statuses, error handling)
- client tests for axios requests
- add possibilty to delete a record 
