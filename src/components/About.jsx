import WhoIAm from "./WhoIAm"
import Skills from "./Skills"
import Execution from "./Execution"

const About = () => {
  return (

    <div className="bg-themeBg text-themeText min-h-screen pt-28 transition-colors duration-500">

      <WhoIAm />

      <Skills />

      <Execution />

    </div>

  )
}

export default About