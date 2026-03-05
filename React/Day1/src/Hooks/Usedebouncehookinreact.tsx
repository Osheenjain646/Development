/**
 * useDebounce Hook ka use React mein delay create karne ke liye kiya jata hai.
 * Jab bhi user koi input deta hai, toh directly API call nahi hoti.
 * Balki, ek small delay (1 second) wait karte hain agar user fir se type kare toh API call cancel ho jati hai.
 * Yeh performance ke liye bahut useful hai kyunki hum avoid karte hain har ek keystroke par API call karna.
 * 
 * Is component mein:
 * - inputValue state se user ka input store karte hain
 * - useDebounce hook delay ke saath debounced value return karta hai
 * - useEffect tab chalega jab debounceValue change hogi, tabhi console log show hoga "Backend Called"
 * - Isse hum simulate kar sakte hain ki API call sirf delay ke baad hoti hai
 */

import { useEffect, useState, type ChangeEvent } from "react"
import { useDebounce } from "./useDebounce";

const Usedebouncehook = () => {

    const [inputValue , setInputValue] = useState<string>("")
    const debounceValue = useDebounce(inputValue,1);

    function onChangeHandler(e:ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value)
    }

    useEffect(()=>{
        console.log("Backend Called");  
    },[debounceValue])
  return (
    <div>
        <input type="text" placeholder="Enter anything" onChange={onChangeHandler}/>
        {debounceValue}
    </div>
  )
}

export default Usedebouncehook
