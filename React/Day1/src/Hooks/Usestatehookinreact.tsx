// Hooks 
// reusable function 

import { useState } from "react"


// state is a variable which store the data that is going to be change in the future 


/////////////USESTATE Hook//////////////////

// import React, { useState } from 'react'

// const Basic = () => {
//     //basic syntax
//     const [state,setstate]=useState(0)

//     function Increment(){
//         setstate(state+1)
//     }

//     function Decrement(){
//         setstate(state-1)
//     }

//   return (
//     <div>
//         <h1>Count:{state}</h1>
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//     </div>
//   )
// }

// export default Basic


// use state on array 

// import React, { useState } from 'react'

// const Basic = () => {

//     const [freinds,setFreinds] = useState<string[]>(["Anurag","Manoj","Osheen","I Don't Know"])

//     function AddFreind(){
//         setFreinds([...freinds,"IDK"])
//     }

//     function DeleteFreind(){
//         setFreinds(freinds.filter((f)=>f!=="IDK"))
//     }

//     function UpdateFreind(){
//         setFreinds(freinds.map((f)=>f==="Manoj" ? "Legend" : f))
//     }

//   return (
//     <>              {/*using the fragment if not known which to give initiallly*/}
//         <div>
//             {
//                 freinds.map((data)=>(       {/*if using the {} after => we use 
//                                             return statement if not using return we use () after => which works as ifee function */}
//                     <div>
//                         {data}
//                     </div>
//                 ))
//             }
//         </div>
//         <button onClick={AddFreind}>Add Freind</button>
//         <button onClick={DeleteFreind}>Delete Freind</button>
//         <button onClick={UpdateFreind}>Update Freind</button>
//     </>
//   )
// }

// export default Basic

// use state in object 

// import React, { useState } from 'react'

// const Basic = () => {

//     const[user,setUser] = useState({
//         name:"Osheen Jain",
//         age:20
//     })

//     function UpdateAge(){
//         setUser({...user,age:user.age+1})
//     }

//   return (
//     <div>
//         <h1>Name: {user.name}</h1>
//         <h1>Age: {user.age}</h1>
//         <button onClick={UpdateAge}>Update Age</button>
//     </div>
//   )
// }

// export default Basic


// use state for array of objects 

// const Basic = () => {

//     const [CarsAndOwner,setCarsAndOwner] = useState([
//         {id:1,name:"p1",brand:"McLaren",owner:"Anurag Raj"},
//         {id:2,name:"Chiron",brand:"Bugatti",owner:"Osheen Jain"},
//         {id:3,name:"M5",brand:"BMW",owner:"Manoj verma"}
//     ])

//     function UpdateDetails(){
//         setCarsAndOwner(CarsAndOwner.map((c)=>c.id===1 ? {...c,owner:"Legend"}:c))
//     }

//   return (
//     <>
//         <div>
//             {
//                 CarsAndOwner.map((car)=>{
//                     return(
//                         <div>
//                             <h1>Brand: {car.brand}</h1>
//                             <h1>Name: {car.name}</h1>
//                             <h1>Owner: {car.owner}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//         <button onClick={UpdateDetails}>Update</button>
//     </>
//   )
// }

// export default Basic


// function in use state 

const Basic = () => {

    const [count,setcount] = useState(()=>{
        const initialval = Math.floor(Math.random()*(100-50))
        return initialval
    })

    function Increment(){
        setcount((prev)=>prev+1)
    }

    function Decrement(){
        setcount((prev)=>prev-1)
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={Increment}>Add</button>
        <button onClick={Decrement}>Sub</button>
    </div>
  )
}

export default Basic

