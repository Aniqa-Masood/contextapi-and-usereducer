import React, { useState } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';

// App.js is application ka ek root component hai , usko ek wrapper me daal dia hai,or isme by default ek prop pass hota hai. 
// Agr me isko wrap up na krun to usko(child ko) default value milegi jo CounterContext me rkhi hui hai.agr wrap up krdun to wrapping me jo value di h,wo milegi.
// Agr me isko wrap na krun(means root level pe na lekr aun) to child me countercontext ko import kr k value use krlun to sirf child level pr mjhe value milegi baqi or (parent,G-parent,GG-parent) pe value nhi milegi
// isi lye isko globally wrapup krte hain ta k hr component(level) pe value mil jae.

//App.js is the root to all other components. 

function App() {

  //let [count,SetCount] = useState(50)
  let countState = useState(1)  //it is an array, contain 2 values --> [count, setCount]
  return (
    // <CounterContext.Provider value={10}>
    <CounterContext.Provider value={countState}>
      <div>
        {/* This App.js is grand parent.. Here, I am calling parent.js + importing it */}
        <Parent/> 
      </div>
    </CounterContext.Provider>
  );
}

export default App;
