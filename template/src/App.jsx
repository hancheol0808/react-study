import React, { useState } from 'react';
import CompOutput from './comp/CompOutput';
import CopmBtnContainer from './comp/CopmBtnContainer';
import {btnArr} from "./modules/data";

const App = () => {
  return (
    <>
      <main>
        <CompOutput/>
        <CopmBtnContainer/>
      </main>
    </>
  );
};

export default App;
