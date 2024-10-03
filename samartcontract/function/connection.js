// Import Web3 from the web3 package
const Web3 = require("web3").default; // Ensure to use .default for the constructor
const Calculater = require("../build/contracts/Calculator.json");

// Create a new instance of Web3 using the Ganache provider URL
const web3 = new Web3("http://127.0.0.1:7545"); // Change to 'http://127.0.0.1:8545' if using Ganache CLI

// async function connect() {
//   try {
//     // Get accounts from the connected provider
//     const accounts = await web3.eth.getAccounts();
//     console.log("Accounts:", accounts);

//     // Example: Check the balance of the first account
//     const balance = await web3.eth.getBalance(accounts[0]);

//     // console.log('Balance of first account:', web3.utils.fromWei(balance, 'ether'), 'ETH');
//     return accounts;

//   } catch (error) {
//     console.error("Error connecting to Ganache:", error);
//   }
// }

// create contract instance
async function createInstance() {

  var account = await web3.eth.getAccounts();
  var network_data = Calculater.networks[await web3.eth.net.getId()];
  var address = network_data["address"];
  var instance = await new web3.eth.Contract(Calculater.abi, address);
//   console.log("Instance of contract:" + account + "-" + address);
//   console.log("instance", instance);
  return { account, instance };

}
createInstance();

// Execute the connect function
module.exports = { createInstance };
