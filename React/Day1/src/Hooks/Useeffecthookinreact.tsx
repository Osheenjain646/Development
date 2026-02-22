// use to manage the sideeffect 
// means that the data will be fetched only once from DB 

// import { useEffect, useState } from "react"

// const Useeffecthook = () => {

//     const [state,setstate] = useState(0)

//     function addd(){
//         setstate(state+1)
//     }

//     useEffect(()=>{
//         if(state>10){
//             document.body.style.backgroundColor = 'cyan'
//         }
//     },[state])

//   return (
//     <div>
//         {state}
//         <button onClick={addd}>Add</button>
//     </div>
//   )
// }

// export default Useeffecthook

import React, { useEffect, useState } from 'react'

interface IUser{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}



const Useeffecthook = () => {

    const [data,setData] = useState<IUser[]>([])

    useEffect(()=>{
        async function main() {
            const data1 = await fetch('https://jsonplaceholder.typicode.com/todos')
            const res = await data1.json()
            if(res){
                setData(res)
            }
        }
        main()
    },[])
  return (
    <div>
        {
            data.map((m)=>{
                return <div>{m.title}</div>
            })
        }
    </div>
  )
}

export default Useeffecthook

