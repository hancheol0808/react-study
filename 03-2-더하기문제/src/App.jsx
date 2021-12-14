import React, { useState } from 'react';
import CompInput from './CompInput';
import CompOutput from './CompOutput';

const App = () => {
  const fnRanNum = () =>{
    return Math.floor(Math.random()*10)
  }
  const [num,setNum] = useState(fnRanNum)

  return (
    <>
      <p>제시된 숫자를 더하기로 완성하세요</p>
      <CompOutput num={num}/>
      <CompInput num={num} />
    </>
  );
};

export default App;
