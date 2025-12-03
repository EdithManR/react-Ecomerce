import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"

function App() {
  

  return (
    <>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element = {<Home/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
