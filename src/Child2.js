import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

function Child2() {
    //using reducer
    //state is the value
    let [state,dispatch] = useReducer(CounterReducer, 10); //setting initial value =10
    
    return(
        <div>
            <h2>This is Second child using Reducer:</h2>
            {/* initial value is 10 */}
            <h3>Counter value is: {state} </h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>

    )
}
export default Child2