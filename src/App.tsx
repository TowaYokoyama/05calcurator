import { useState } from "react";
import { evaluate } from "mathjs";
import Button from './components/button';

const App = () => {
  const [input,setInput] = useState(""); //現在の表示されている値
  const [result,setResult] = useState(""); //計算結果やエラーメッセージ用

  const handleButtonClick = (val:string) => {//val=クリックされた値
    setInput((prev)=> prev+ val); //prevは前の表示された値 に+valを末尾に追加して
  };

  const calculateResult = () => {
    try{
      const result = evaluate(input);
      setInput(result.toString());
      setResult("");
    }catch(err){
      setResult("Error");
      setInput("");
    }
  };
  const clearInput = () => { //clearが押されたとき用
    setInput("");//空にする
    setResult("");//空にする
  };

  return (
    <div className="max-w-xs mx-auto mt-10 p-4 bg-gray-100 rounded-xl shadow-lg">
      <div className="mb-4 p-4 text-right text-2xl bg-white rounded-lg border border-gray-300">
        {input || "0"}
      </div>

      {/* 1~3, + */}
      <div className="grid grid-cols-4 gap-2 mb-2">
        <Button onClick={()=> handleButtonClick("1")}>1</Button>
        <Button onClick={()=> handleButtonClick("2")}>2</Button>
        <Button onClick={()=> handleButtonClick("3")}>3</Button>
        <Button onClick={()=> handleButtonClick("+")}>+</Button>
      </div>
      {/*4~6,- */}
      <div className="grid grid-cols-4 gap-2 mb-2">
      <Button onClick={()=> handleButtonClick("4")}>4</Button>
      <Button onClick={()=> handleButtonClick("5")}>5</Button>
      <Button onClick={()=> handleButtonClick("6")}>6</Button>
      <Button onClick={()=> handleButtonClick("-")}>-</Button>
    </div>
    {/*7~9,* */}
    <div className="grid grid-cols-4 gap-2 mb-2">
    <Button onClick={()=> handleButtonClick("7")}>7</Button>
    <Button onClick={()=> handleButtonClick("8")}>8</Button>
    <Button onClick={()=> handleButtonClick("9")}>9</Button>
    <Button onClick={()=> handleButtonClick("*")}>*</Button>
    </div>
    {/* C,0 / .  */}
    <div className="grid grid-cols-4 gap-2 m-2">
      <Button onClick={clearInput}>C</Button>
      <Button onClick={()=>handleButtonClick('0')}>0</Button>
      <Button onClick={()=>handleButtonClick('/')}>/</Button>
      <Button onClick={()=>handleButtonClick('.')}>.</Button>
    </div>
    {/*= */}
    <div className="grid grid-cols-4 gap-2">
      <Button  onClick={calculateResult}>=</Button>
    </div>
        {/* 結果やエラーメッセージを表示 */}
        {result && <div className="text-red-500 text-right text-xl">{result}</div>}
    </div>
  );
};

export default App
