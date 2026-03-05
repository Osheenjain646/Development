// rafce used to create a function component
// if you don't want to specify tag name then make fragments <>[]<>

// import Usecallback from "./Hooks/Usecallbackhookinreact"
import Usedebouncehook from "./Hooks/Usedebouncehookinreact"
// import Useprevioushook from "./Hooks/Useprevioushookinreact"

// import Useeffecthook from "./Hooks/Useeffecthookinreact"
// import Usememohook from "./Hooks/Usememohookinreact"
// import Userefhook from "./Hooks/Userefhookinreact"
// import UseStateHook from "./Hooks/Usestatehookinreact"

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
      {/* <Userefhook></Userefhook> */}
      {/* <Usememohook></Usememohook> */}
      {/* <Useprevioushook></Useprevioushook> */}
      {/* <Usecallback></Usecallback> */}
      <Usedebouncehook></Usedebouncehook>
    </div>
  )
}

export default App