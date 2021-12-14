import React, { useState } from 'react';
import Compbtn from './components/Compbtn';
import CompOutput from './components/CompOutput';

const App = () => {
  const [_num,_setNum] = useState(0)
  const fn = (e) =>{
    let num = _num
    let n = parseInt(e.target.getAttribute("data-n"))
    _setNum(num+n)
  }
  return (
    <>
      <p>증감연산</p>
      <hr />
      <CompOutput _num={_num}/>
      <hr />
      <Compbtn fn={fn} />
   
    </>
  );
};

export default App;
