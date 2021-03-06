import React from 'react';

const Compbtn = ({fn}) => {
  return (
    <div>
      <button data-n={-1} onClick={fn}>-</button>
      <button data-n={1} onClick={fn}>+</button>
    </div>
  );
};

export default Compbtn;