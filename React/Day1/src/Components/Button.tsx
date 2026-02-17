import type { ReactNode } from "react"

// interface Properties{
//     children:ReactNode
// }


// const Button = ({children}:Properties)=>{
//     same as below data 
// }

type ButtonVaraintTypes = "sm" | "md" | "lg"
type ButtonVariant = "Primary" | "secondary"

// functional component 
const Button = ({children,size,varients,disabled}:{
    children:ReactNode
    size:ButtonVaraintTypes
    varients:ButtonVariant
    disabled:boolean 
}) => {

  type ButtonSize = Record<ButtonVaraintTypes , string>
  type ButtonVarient = Record<ButtonVariant , string>

  const sizes:ButtonSize={
    "sm":"w-20 h-5 px-5 py-5 border-2 rounded-md flex justify-center items-center",
    "md":"w-30 h-7 px-5 py-5 border-2 rounded-md flex justify-center items-center",
    "lg":"w-40 h-10 px-5 py-5 border-2 rounded-md flex justify-center items-center"
  }

  const vareint:ButtonVarient={
    "Primary":"bg-black text-white",
    "secondary":"text-black"
  }

  return (
    <button className={`${sizes[size]} ${vareint[varients]}`} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button

