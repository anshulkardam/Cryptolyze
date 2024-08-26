

import { Savedlist } from "../components/Savedlist"
import { SiteHeader } from "../components/SiteHeader"


export const Watchlist = () => {

  return <div>
    <div className="bg-black min-h-screen">
      <SiteHeader />
      <Savedlist />
    </div>
  </div>
}