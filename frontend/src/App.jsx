
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from "./pages/Dashboard"
import { Compare } from "./pages/Compare"
import { CoinInfo } from "./pages/CoinInfo"
import { Watchlist } from "./pages/Watchlist"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>

        <Route path="/compare" element={<Compare />} ></Route>
        <Route path="/coin/:id" element={<CoinInfo />} ></Route>

        <Route path="/watchlist" element={<Watchlist />} ></Route>
      </Routes>
    </BrowserRouter >


  )

}

export default App


