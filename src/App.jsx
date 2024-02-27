import TheNavbar from "./components/TheNavbar"
import { Outlet } from "react-router-dom"
function App() {
  return (
    <>
   <TheNavbar/>
   <div>
    <Outlet/>
   </div>
    </>
  )
}

export default App
