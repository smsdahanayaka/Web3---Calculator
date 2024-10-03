// Import Web3 from the web3 package
const Web3 = require("web3").default; // Ensure to use .default for the constructor
const Calculater = require("../src/contract/Calculator.json");

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

// INSTANCE - FUNCTION OF CREATE INSTANCE
async function createInstance() {
  var account = await web3.eth.getAccounts();
  var network_data = Calculater.networks[await web3.eth.net.getId()];
  var address = network_data["address"];
  var instance = await new web3.eth.Contract(Calculater.abi, address);
  //   console.log("Instance of contract:" + account + "-" + address);
  console.log("instance", instance);
  console.log("acount", account);
  return { account, instance };
}

// ADD - FUNCTION OF ADD
async function add(num1, num2) {
  const result = await createInstance();
  const instance = result.instance;
  const accounts = result.account;
  const response = await instance.methods.add(num1, num2);
  const send = await response.call({ from: accounts[0] });
  console.log("send", Number(send));
  return Number(send);
}

// SUB - FUNCTION OF SUB
async function sub(num1,num2){
    var result=await createInstance();
    var instance=result.instance;
    var account=result.account;
    var sub=await instance.methods.sub(num1,num2);
    var resul_final1=await sub.call({from:account[0]});
    console.log("final result is ",Number(resul_final1));
    return Number(resul_final1);
}

// MULTY - FUNCTION OF MULTY
async function mul(num1,num2){
    var result=await createInstance();
    var account = result.account;
    var instance = result.instance;

    var mul= await instance.methods.mul(num1,num2);
    var result = await mul.call({from:account[0]});
    console.log('final result ',Number(result));
    return Number(result);
}

// DIV - FUNCTION OF DIV
async function div(num1, num2) {
  var result = await createInstance();
  var account = result.account;
  var instance = result.instance;

  var div = await instance.methods.div(num1, num2);
  var final_result = await div.call({ from: account[0] });
  console.log("final result", Number(final_result));
  return Number(final_result);
}

// Execute the connect function
module.exports = { createInstance, add, sub,mul,div };
