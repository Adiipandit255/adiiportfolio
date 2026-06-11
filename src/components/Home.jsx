import Hero from "./Hero"
import BehindWork from "./BehindWork"
import FindMe from "./FindMe"

const Home = () => {
  return (
    <div className="relative bg-themeBg min-h-screen w-full overflow-hidden transition-colors duration-500">
      <div className="relative z-10">
        <Hero />
        <BehindWork />
        <FindMe />
      </div>
    </div>
  )
}

export default Home