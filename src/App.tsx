import { AboutSection } from "./Components/About"
import { Header } from "./Components/Header"
import { SectionHero } from "./Components/SectionHero"
import { ServicesSection } from "./Components/Services"
import { Container } from "./Styles/appstyle"

function App() {

  return (
    <Container>
      <Header/>
      <SectionHero/>
      <AboutSection/>
      <ServicesSection/>
    </Container>
  )
}

export default App
