import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState([
    {id:1,name:"홍길동"},
    {id:2,name:"김철수"}
  ])
  const refInput = useRef()
  const fnAdd = () => {
    /*
    let arr = [..._arr]
    arr.push("이")
    _setArr(arr)
    */
   /*
    let arr = _arr.map((v)=>{
      return v
    })
    arr.push("이")
    _setArr(arr)
    */
    /*
    let name = refInput.current.value
    let arr = [..._arr,name]
    _setArr(arr)
    */
    let name = refInput.current.value
    let obj = {
      id :Date.now(),
      name,
    }
    _setArr([..._arr,obj])
  }
  const fnDel = (e)=>{
    let delId = parseInt(e.target.getAttribute("data-n"))
    let arr = _arr.filter((v)=>{
      return v.id != delId
    })
    _setArr(arr)
  }
  
  return (
    <>
      <input ref={refInput} type="text" /> &nbsp;
      <button onClick={fnAdd}>추가하기</button>
      <hr />
      {
        _arr.map((v)=>{
          //return `${v},`
          return(
            <li key={v.id}>
              {v.name}&nbsp;
              <button data-n={v.id} onClick={fnDel}>삭제</button>
            </li>
          )
        })
      }
    </>
  );
};

export default App;
