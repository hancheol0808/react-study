import React, { useRef, useState } from 'react';

const App = () => {
  const[_manArr,_setManArr] = useState([])
  const[_womanArr,_setWomanArr] = useState([])
  const refNameInput = useRef()
  const refAgeInput = useRef()
  let gender 
  const fnGender =(e) =>{
    gender = e.target.value
  }
  const fnAddArr = ()=>{
    let name = refNameInput.current.value
    let age = refAgeInput.current.value
    let obj={
      name,age,gender
    }
    if(obj.gender==="남"){
      _setManArr([..._manArr,obj])
    }else{
      _setWomanArr([..._womanArr,obj])
    }
  }
  return (
    <>
      <p>이름,나이,성별을 입력하고 추가버튼을 누르면 성별이 구분되서 출력합니다</p>
      이름 <input ref={refNameInput} type="text" /> <br />
      나이 <input ref={refAgeInput}  type="text" /> <br />
      <input onChange={fnGender} defaultValue="남" type="radio" name="gender" />남 
      <input onChange={fnGender} defaultValue="여" type="radio" name="gender" />여
      <br />
      <button onClick={fnAddArr}>추가하기</button>
      <hr />
      남자명단현황
      <p>
        {
          _manArr.map((v)=>{
            return `(이름${v.name}, 나이${v.age})`
          })
        }
      </p>
      <hr />
      여자명단현황
      <p>
        {
          _womanArr.map((v)=>{
            return `(이름${v.name}, 나이${v.age})`
          })
        }
      </p>
    </>
  );
};

export default App;
