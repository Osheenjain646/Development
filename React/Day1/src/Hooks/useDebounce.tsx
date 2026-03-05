import { useEffect, useRef, useState } from "react"

export const useDebounce = (initialValue:string , time:number) => {
    const [debounceValue , setDebounceValue] = useState(initialValue)
    const ref = useRef<number|null>(0)

    useEffect(()=>{
        ref.current = setTimeout(()=>{
            setDebounceValue(initialValue)
        },time*1000)

        return()=>{
            clearTimeout(ref.current!)
        }

    },[initialValue , time])

    return debounceValue
}