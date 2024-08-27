
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from "./pages/Dashboard"
import { Compare } from "./pages/Compare"
import { CoinInfo } from "./pages/CoinInfo"
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react"
import { Watchlist } from "./pages/Watchlist"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/dashboard" element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } >
        </Route>

        <Route path="/compare" element={
          <>
            <SignedIn>
              <Compare />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } ></Route>
        <Route path="/coin/:id" element={
          <>
            <SignedIn>
              <CoinInfo />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } ></Route>

        <Route path="/watchlist" element={
          <>
            <SignedIn>
              <Watchlist />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } ></Route>
      </Routes>
    </BrowserRouter >


  )

}

export default App


