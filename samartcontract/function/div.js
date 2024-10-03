const { createInstance } = require("../function/connection");

async function div(num1, num2) {
  var result = await createInstance();
  var account = result.account;
  var instance = result.instance;

  var div = await instance.methods.div(num1, num2);
  var final_result = await div.call({ from: account[0] });
  console.log("final result", Number(final_result));
}

div(6,5);
module.exports={div};