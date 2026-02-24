// custom hook made with other hook 
// store previous data 

import { useEffect, useRef, useState } from "react"




const Useprevioushook = () => {

    const useP = (val:number) =>{
        const ref = useRef(0)
        useEffect(()=>{
            ref.current = val
        },[val])

        return ref.current
    }

    const [count,setcount] = useState(0)
    const prev = useP(count)

  return (
    <div>
        <h1>The current val is {count} and the previous value is {prev}</h1>
        <button onClick={()=>{
            setcount((prev)=>prev+1)
        }}>Increment</button>
    </div>
  )
}

export default Useprevioushook

