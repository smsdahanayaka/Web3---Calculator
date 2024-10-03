import React, { useState } from "react";
import {createInstance, add, sub,mul,div} from "../web3_functions";

const Calculator = () => {
  // const [input, setInput] = useState("");

  // const handleClick = (value) => {
  //     setInput(input + value);
  // };

  // const clearInput = () => {
  //     setInput("");
  // };

  // const calculateResult = () => {
  //     try {
  //         setInput(eval(input).toString());  // `eval` is used here for simplicity, but in a real-world app, you'd want to avoid using it for security reasons.
  //     } catch {
  //         setInput("Error");
  //     }
  // };

  const [input, setInput] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    if (["+", "-", "/", "*"].includes(value)) {
      setOperation(value);
    } else {
        if(input ==""){
            setNum1(value);
        }else{
            setNum2(value);
        }
        
    }
    setInput(input + value);
  };

  const clearInput = () => {
    setNum1("");
    setNum2("");
    setOperation(null);
    setInput("");
  };

  const calculateResult = async ()=>{
    try{
        // const num2 = input;
        let result;

        // Call the appropriate smart contract function based on the selected operation
        if (operation === "+") {
            result = await add(Number(num1), Number(num2));
        } else if (operation === "-") {
            result = await sub(Number(num1), Number(num2));
        } else if (operation === "*") {
            result = await mul(Number(num1), Number(num2));
        } else if (operation === "/") {
            result = await div(Number(num1), Number(num2));
        }
        setInput(result);
    }catch(error){
        console.error("ERROR CALCULATER RESULT : ",error);
        setInput(error);
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
