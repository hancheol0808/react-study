import React, { useState } from 'react';

const App = () => {
  const [n,setN] = useState("1")
  
  let fn = ()=>{
    let num = parseInt(n)
    num+=10
    setN(num)
  }
  return (
    <>
      <p>{n}</p>
      <button onClick={fn}>1씩증가</button>
    </>
  );
};

export default App;
