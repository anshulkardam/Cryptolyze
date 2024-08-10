
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from "./pages/Dashboard"
import { Compare } from "./pages/Compare"
import { CoinInfo } from "./pages/CoinInfo"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
        <Route path="/compare" element={<Compare />} ></Route>
        <Route path="/coin/:id" element={<CoinInfo />} ></Route>
      </Routes>
    </BrowserRouter>


  )

}

export default App


