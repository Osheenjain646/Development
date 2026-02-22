// rafce used to create a function component
// if you don't want to specify tag name then make fragments <>[]<>

import Useeffecthook from "./Hooks/Useeffecthookinreact"
import Userefhook from "./Hooks/Userefhookinreact"
import UseStateHook from "./Hooks/Usestatehookinreact"

// import Events from "./Components/Events"


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
      {/* <UseStateHook></UseStateHook> */}
      {/* <Useeffecthook></Useeffecthook> */}
      <Userefhook></Userefhook>
    </div>
  )
}

export default App