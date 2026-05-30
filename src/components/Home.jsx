import Hero from "./Hero"
import BehindWork from "./BehindWork"
import FindMe from "./FindMe"
import ParticlesBackground from "./ParticlesBackground"

const Home = () => {
  return (
    <div className="relative bg-[#05010d] min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <Hero />
        <BehindWork />
        <FindMe />
      </div>
    </div>
  )
}

export default Home