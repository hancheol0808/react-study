import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr,_setArr] = useState([])
  const refInput1 = useRef()
  const refInput2 = useRef()
  const fnAdd = ()=>{
    let AddName = refInput1.current.value
    let obj = {
      key : Date.now(),
      name : AddName
    }
    _setArr([..._arr,obj])
  }
  const fnDel = () =>{
    let DelName = refInput2.current.value
    let arr = _arr.filter((v)=>{
      return v.name != DelName
    })
    _setArr(arr)
  }
  return (  
    <>
      <p>이름을 추가하거나 제거하면 목록이 li객체로 출력됩니다</p>
      <input ref={refInput1} type="text" /> &nbsp;
      <button onClick={fnAdd}>추가</button>
      <br />
      <input ref={refInput2} type="text" /> &nbsp;
      <button onClick={fnDel}>제거</button>
      <hr />
      <ul>
        {
          _arr.map((v)=>{
            return <li key = {v.key}>{v.name}</li>
          })
        }
      </ul>
    </>
  );
};

export default App;
