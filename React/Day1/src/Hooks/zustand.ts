import { create } from "zustand"


interface ICounter{
    count:number
    increment:()=>void,
    decrement:()=>void
}

export const useCounter = create<ICounter>((set)=>({   // set is likely to be the owner of the store useCounter 
    count:0,

    increment:()=>{
        set((state)=>({count:state.count+1}))
    },

    decrement:()=>{
        set((state)=>({count:state.count-1}))
    }
}))

