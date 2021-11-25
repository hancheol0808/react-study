import React from 'react';

const App = () => {
  const fn = () => {
    let oper = document.querySelector("select option:checked").value
    console.log(oper);
  }
  return (
    <>
      <p>숫자를 변경하거나, 연산자를 변경하면 값이 바로 변경되요</p>
      <p>
        <input defaultValue="0" type="text" />
        &nbsp;
        <select onChange = {fn}>{/*  */}
          <option defaultValue="+">+</option>
          <option defaultValue="-">-</option>
          <option defaultValue="*">*</option>
          <option defaultValue="/">/</option>
        </select>
        &nbsp;
        <input defaultValue="0" type="text" />
      </p>
      <p>
        결과 : 0
      </p>
    </>
  );
};

export default App;
