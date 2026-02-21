// rafce used to create a function component
// if you don't want to specify tag name then make fragments <>[]<>

// import Events from "./Components/Events"
import Basic from "./Hooks/usestatehookinreact"


// import Mainpage from "./Components/Mainpage"


// const App = () => {
//   return (
//     <div>
//       <Mainpage></Mainpage>
//     </div>
//   )
// }

// export default App

// import AdminandUserPanel from "./Components/AdminandUserPanel";

// const App = () =>{
//   return(
//     <div>
//       <AdminandUserPanel data={"Admin"}></AdminandUserPanel>
//     </div>
//   )
// }

// export default App


const App = () => {
  return(
    <div>
      {/* <Events></Events> */}
      <Basic></Basic>
    </div>
  )
}

export default App