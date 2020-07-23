import React, {useContext} from 'react';
import CounterContext from './CounterContext';


function Child(){

    let counterValue = useContext(CounterContext)
    return(
        <div>
            <h2>This is first child using Context: </h2>
            <h3>Counter Value is : {counterValue[0]} </h3>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increment Context</button>
        </div>

    )
}
export default Child;

// createContext() --> is used to create context
// useContext() --> is used to use Context


// app(grand parent)‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾↑
// parent                G-child can update the state of G-parent. 
// child(grand child)_______________________↑