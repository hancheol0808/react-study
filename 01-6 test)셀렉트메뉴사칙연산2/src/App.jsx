import React from 'react';

const App = () => {
  return (
    <>
      <p>숫자와 연산자를 선택하고 버튼을 누르면 결과가 출력됩니다</p>
      <p>
        <select className="num1-1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select className="num1-2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        &nbsp;
        <select className="oper">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        &nbsp;
        <select className="num2-1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select className="num2-2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </p>
      <button>결과보기</button>
      <p>결과</p>
    </>
  );
};

export default App;
