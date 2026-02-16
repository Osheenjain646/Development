import type { ReactNode } from "react"

// interface Properties{
//     children:ReactNode
// }


// const Button = ({children}:Properties)=>{
//     same as below data 
// }

const Button = ({children}:{
    children:ReactNode                // one way 
}) => {

    type ButtonVaraintTypes = "sm" | "md" | "lg"

    type ButtonVariant = Record<ButtonVaraintTypes , string>



  return (
    <Button>
        {children}
    </Button>
  )
}

export default Button