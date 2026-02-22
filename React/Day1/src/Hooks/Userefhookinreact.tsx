// it persist rendering if data is changed 

import { useEffect, useRef } from "react"

const Userefhook = () => {
    const ref = useRef<HTMLInputElement | null>(null)

    useEffect(()=>{
        ref.current?.focus()
        ref.current!.value="UseRef"
    },[])

  return (
    <div>
        <input ref={ref} placeholder="Enter the Name" type="text" />
    </div>
  )
}

export default Userefhook

