import React, { useRef } from 'react';

const CompInput = ({num}) => {
  const arrOption = []
  for(let i=0;i<=9; i++){
    arrOption.push(i)
  }
  const sel1 =useRef()
  const sel2 =useRef()
  const fnClick=()=>{
    let num1 = parseInt(sel1.current.value)
    let num2 = parseInt(sel2.current.value)
    let result = num1+num2
    if(result === num){
      alert("정답")
    }else{
      alert("오답")
    }
  }
  return (
    <>
      <select ref={sel1}>
        {
          arrOption.map((v)=>{
            return <option key={v} value={v}>{v}</option>
          })
        }
      </select>
      +
      <select ref={sel2}>
        {
          arrOption.map((v)=>{
            return <option key={v} value={v}>{v}</option>
          })
        }
      </select>
      <hr />
      <button onClick={fnClick}>결과확인</button>
    </>
  );
};

export default CompInput;