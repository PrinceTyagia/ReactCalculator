import React, { useState } from "react";
import { Container, Screen, Previous, Current, Button } from "../style/Main";
const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [opertaion, setOperations] = useState("");

  const applyValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const allclearHandler = () => {
    setCurrent("");
    setOperations("");
    setPrevoius("");
  };
   const chooseOperationHandler = (el) => {
     if (current === "") return;
     if (prevoius !== "") {
       let value = compute();
       setPrevoius(value);
     } else {
       setPrevoius(current);
     }
     setCurrent("");
     setOperations(el.target.getAttribute("data"));
   };

   const equalHandler = () => {
     let value = compute();
     if (value === undefined || value == null) return;
     setCurrent(value);
     setPrevoius("");
     setOperations("");
   };
   const compute = () => {
     let result;
     let previousNumber = parseFloat(prevoius);
     let currentNumber = parseFloat(current);
     if (isNaN(previousNumber) || isNaN(currentNumber)) return;
     switch (opertaion) {
       case "÷":
         result = previousNumber / currentNumber;
         break;
       case "x":
         result = previousNumber * currentNumber;
         break;
       case "+":
         result = previousNumber + currentNumber;
         break;
       case "-":
         result = previousNumber - currentNumber;
         break;
       default:
         return;
     }
     return result;
   };
  

  return (
    <>
      <Container>
        <Screen>
          <Previous>
            {prevoius}
            {opertaion}
          </Previous>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} control onClick={allclearHandler}>
          AC
        </Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button opration data={"÷"} onClick={chooseOperationHandler}>
          ÷
        </Button>
        <Button onClick={applyValueHandler} data={7}>
          7
        </Button>
        <Button onClick={applyValueHandler} data={8}>
          8
        </Button>
        <Button onClick={applyValueHandler} data={9}>
          9
        </Button>
        <Button opration data={"x"} onClick={chooseOperationHandler}>
          x
        </Button>
        <Button onClick={applyValueHandler} data={4}>
          4
        </Button>
        <Button onClick={applyValueHandler} data={5}>
          5
        </Button>
        <Button onClick={applyValueHandler} data={6}>
          6
        </Button>
        <Button opration data={"+"} onClick={chooseOperationHandler}>
          +
        </Button>
        <Button onClick={applyValueHandler} data={1}>
          1
        </Button>
        <Button onClick={applyValueHandler} data={2}>
          2
        </Button>
        <Button onClick={applyValueHandler} data={3}>
          3
        </Button>
        <Button opration data={"-"} onClick={chooseOperationHandler}>
          -
        </Button>
        <Button onClick={applyValueHandler} decomal data={"."}>
          .
        </Button>
        <Button onClick={applyValueHandler} data={0}>
          0
        </Button>
        <Button gridSpan={2} equals onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;
