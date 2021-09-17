taken from https://fullstackopen.com/en/

- index.js
	- create server with http and Express app, then start server with server.listen
- app.js
	- connect to MongoDB
	- attach middleware to Express app, including router
- controllers
	- router.js
		- express Router, handles all the requests
- models
	- datum.js
		- set mongoDB schema and adjusted methods through Mongoose
- utils
	- config.js
		- import environmental variables
	- logger.js
		- choice of info and error logging
	- middleware.js
		- minimum: request logger; unknown endpoint catch; error handler

### Setup

.env file with PORT= and MONGODB_URI=

write mongoose schema and edit references
