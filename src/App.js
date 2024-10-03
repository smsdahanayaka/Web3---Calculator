import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/calculater.css";
import Title from "./components/Title";
import Calculator from "./components/Calculater";
import { createInstance } from "./web3_functions";
function App() {
  const [connectInstance, setInstance] = useState(null);
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    async function connect() {
      try {
        const result = await createInstance();
        const account = result.account;
        setAccounts(account);
        const instance = result.instance;
        setInstance(instance);
        console.log("connectInstance", connectInstance);
        console.log("accounts", accounts);
      } catch (error) {
        alert("faild to conect with web3");
        console.log(error);
      }
    }
    connect();
  });

  return (
    <div className="App">
      <Title name="Web3 - Calculator" />
      <Calculator />
    </div>
  );
}

export default App;
