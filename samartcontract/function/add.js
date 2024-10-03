const { createInstance } = require("../function/connection");

async function add(num1, num2) {
  const result = await createInstance();
  const instance = result.instance;
  const accounts = result.account;
  const response = await instance.methods.add(num1, num2);
  //   console.log("accounts", result.account);
  //   const from_acc =accounts.account;
  //   console.log("accounts:", accounts);
  const send = await response.call({ from: accounts[0] });
  console.log("send", Number(send));
}
add(3, 6);
module.exports = { add };
