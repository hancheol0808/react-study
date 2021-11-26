import React, { useRef, useState } from 'react';

const App = () => {
  const[_arr,_setArr] = useState([])
  const refName = useRef()
  const refAge = useRef()
  let gender 
  const fnGender =(e) =>{
    gender = e.target.value
  }
  const fn = ()=>{
    let name = refName.current.value
    let age = refAge.current.value
    let obj={
      name,age,gender
    }
    _setArr([..._arr,obj])
  }
  return (
    <>
      <p>이름,나이,성별을 입력하고 추가버튼을 누르면 성별이 구분되서 출력합니다</p>
      이름 <input ref={refName} type="text" /> <br />
      나이 <input ref={refAge}  type="text" /> <br />
      <input onChange={fnGender} defaultValue="남" type="radio" />남 
      <input onChange={fnGender} defaultValue="여" type="radio" />여
      <br />
      <button onClick={fn}>추가하기</button>
      <hr />
      남자명단현황
      <p>
        {
          _arr.map((v)=>{
            return `(이름:${v.name},나이:${v.age},성별 ${v.gender})`
          })
        }
      </p>
      <hr />
      여자명단현황
      <p></p>
    </>
  );
};

export default App;
