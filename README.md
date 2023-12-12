Crypto List Updater
Overview
This Node.js application fetches and stores the names and IDs of all cryptocurrencies from Coingecko's API into a MongoDB database. It includes a background job that automatically updates the cryptocurrency list every hour.

Table of Contents
Installation
Usage
Routes
Background Job
Dependencies
License
Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd crypto-list-updater
Install dependencies:

bash
Copy code
npm install
Set up a MongoDB server and update the connection string in server.js:

javascript
Copy code
mongoose.connect('mongodb://localhost:27017/crypto-list-updater', { useNewUrlParser: true, useUnifiedTopology: true });
Usage
Run the application:

bash
Copy code
node server.js
Visit http://localhost:3000/update-cryptos to manually update cryptocurrency names initially. The background job will automatically update them every hour.

Routes
Update Cryptos
Endpoint: /update-cryptos
Method: GET
Description: Fetches and stores the names and IDs of all cryptocurrencies from Coingecko's API.
Background Job
The application uses the node-cron package to schedule a background job that updates the cryptocurrency list every hour. The job is defined in the server.js file.

Dependencies
express: Web application framework for Node.js.
mongoose: MongoDB object modeling tool.
axios: Promise-based HTTP client for Node.js.
node-cron: Package for scheduling background tasks in Node.js.
License
This project is licensed under the MIT License.
