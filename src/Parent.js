import React from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent() {
    return(
        <div>
    {/* I am calling child component here so I should import Child. */}
             <Child/> 
             <Child2/>
        </div>
    )
}
export default Parent;