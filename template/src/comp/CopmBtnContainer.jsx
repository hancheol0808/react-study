import React from 'react';
import {btnArr} from "../modules/data";

const CopmBtnContainer = () => {
  return (
    <form className='btnContainer'>
          {
            btnArr.map((v)=>{
              return (
                <button key = {v.id} className={`${v.fn} ${v.id}`}>
                  {v.char}
                </button>
              )
            })
          }
      </form>
  );
};

export default CopmBtnContainer;