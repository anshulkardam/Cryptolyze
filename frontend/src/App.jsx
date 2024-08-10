
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from "./pages/Dashboard"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
      </Routes>
    </BrowserRouter>


  )

}

export default App


