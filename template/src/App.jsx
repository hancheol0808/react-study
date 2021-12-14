import { useState } from "react";
import CompBtnContainer from "./comp/CompBtnContainer";
import CompOutput from "./comp/CompOutput";

const App = () => {
  const [_result,_setResult] = useState("")
  return (
    <>
      <main>
        <CompOutput _result={_result} /> 
        <CompBtnContainer _setResult={_setResult}/>
      </main>
    </>
  );
};

export default App;