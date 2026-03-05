/**
 * Zustand ek lightweight state management library hai React ke liye.
 * Ye Redux jaisa kaam karta hai but bahut simple aur minimal hai.
 * 
 * Zustand ke fayde:
 * - Code bahut kam likhna padta hai compared to Redux
 * - No need of Context API jaise complex providers
 * - Direct function se state update kar sakte hain
 * - Automatic re-rendering hoti hai jab state change hoti hai
 * - Developer tools available hain debugging ke liye
 * 
 * Installation: npm i zustand
 * 
 * Example:
 * import { create } from 'zustand'
 * 
 * const useStore = create((set) => ({
 *   count: 0,
 *   increment: () => set((state) => ({ count: state.count + 1 })),
 * }))
 * 
 * Component mein use karne ke liye:
 * const { count, increment } = useStore()
 */

// npm i zustand


const UseZustandhook = () => {
  return (
    <div>
        
    </div>
  )
}

export default UseZustandhook