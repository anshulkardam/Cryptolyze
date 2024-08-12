import { InfoCard } from "../components/InfoCard"
import { LandingHeader } from "../components/LandingHeader"
import Widget from "../components/Widget"

export const LandingPage = () => {

  return <div>
    <div className="bg-black min-h-screen">
      <LandingHeader />
      <InfoCard />
    </div>
  </div>
}