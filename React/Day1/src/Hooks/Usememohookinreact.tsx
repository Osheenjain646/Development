import { useMemo, useState } from "react";

// const Calculation = () =>{
//     const sum = () =>{
//         console.log("Calculating the sum..");
        
//         let sum=0;
//         for(let i=0; i<1000000; i++){
//             sum+=i;
//         }
//         return sum
//     }

//     const total = useMemo(()=>sum(),[])

//     return <p>Sum: {total}</p>
// }


// const Usememohook = () => {

//     const [count , setCount] =useState(0)

//     function adddd(){
//         setCount(count+1)
//     }

//   return (
//     <div>
//         <Calculation></Calculation>

//         <button onClick={adddd}>Add</button>

//         <div>Parent renders: {count}</div>
//     </div>
//   )
// }

// export default Usememohook

const Fact = ({val}:{val:number})=>{
    const ans=(val:number)=>{
        let fact1=1;
        for(let i=1; i<=val; i++){
            fact1*=i;
        }
        return fact1
    }

    let factorial1 = useMemo(()=>ans(val),[val])
    return <p>Fcatorial: {factorial1}</p>
}

const Usememohook = () => {

    const [factorial,setfactorial] = useState<number>(100)

    const [count,setcount] =useState(0)

    function increasefact(){
        setfactorial(factorial+1)
    }

    function increasecount(){
        setcount(count+1)
    }

  return (
    <div>
        <Fact val={factorial}></Fact>
        <p>count: {count}</p>
        <button onClick={increasefact}>factorial</button>
        <button onClick={increasecount}>count</button>
    </div>
  )
}

export default Usememohook

