import React, {useState, useEffect} from "react";
const Count=()=>{
     const [counter,setCounter] = useState<number>(0);
     const [start,setStart] = useState<boolean>(false);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setCounter(counter + 1);
      }, 1000);
    }
    return () => clearInterval(interval)
  }, [start, counter]);
  
    return<>
    <h1>Counter Timer in typescript</h1>
        <h1>{counter}</h1> 

        <button onClick={()=>{setStart(true)}}>Start</button>
        <button onClick={()=>setStart(false)}>Stop</button>
        <button onClick={()=>{
                setCounter(0);
                setStart(false);
            }}>Reset</button>
    
    </>
}
export default Count;