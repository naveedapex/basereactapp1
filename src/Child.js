import React, { useState } from 'react';


function Child({name}){

    const [counter, setCounter]=useState(0);
    const [modeOn, setMode]=useState(true);

return <div className={`${modeOn?'dark':''}`}>
    
    Hello {name}
    <br></br>
    
    Your Current Conter is : {counter}
    <br/>
    <button onClick={()=>{ setCounter(counter + 1)}}>
        Increse Counter
    </button>
    <button onClick={()=>{setCounter(counter-1)}}>Decrease Counter</button>
    <button onClick={()=>{setMode(!modeOn)}}>Change Mode</button>
    
    </div>
}

export default Child