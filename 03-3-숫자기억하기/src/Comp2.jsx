import React, { useRef , useEffect } from 'react';

const Comp2 = ({_num,_setInit}) => {
  const refInput = useRef()
  const fn = (e) =>{
    e.preventDefault()
    let InputNum = parseInt(refInput.current.value)
    if(_num===InputNum){
      alert("정답");
    }else{
      alert("오답");
    }
    _setInit("comp1")
  }
  useEffect(()=>{
    console.log("comp2 마운트 되었습니다");
    document.querySelector(".comp2").classList.add("active")
    return(()=>{
      console.log("comp2 언마운트 됩니다");
    })
  },[])
  return (
    <section className="comp2">
      <h3>comp2</h3>
      <p>
        기억한 숫자를 입력하고 enter를 누르세요<br />
        (정오답이출력됩니다.)
      </p>
      <hr />
      <form onSubmit={fn}>
        <input ref={refInput} type="text" />
      </form>

    </section>
  );
};

export default Comp2;