
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct"

function App() {
  

  return (
    <>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/productos/:id" element = {<DetailsProduct/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
