import { GridContainer, GridItem, SectionService } from "./style";

export function ServicesSection() {
  return (
    <SectionService id="services">
      <h3>Serviços</h3>
      <h2>Oferecemos os melhores Serviços.</h2>
      <GridContainer>
        <GridItem><h2>Programas de TV</h2></GridItem>
        <GridItem><h2>Reportagem</h2></GridItem>
        <GridItem><h2>Vídeo Clipe</h2></GridItem>
        <GridItem><h2>Fotojornalismo</h2></GridItem>
        <GridItem><h2>Fotografia</h2></GridItem>
        <GridItem><h2>Tele-séries</h2></GridItem>
        <GridItem><h2>Filmes</h2></GridItem>
        <GridItem><h2>Cobertura de Eventos</h2></GridItem>
        <GridItem><h2>Spots publicitários</h2></GridItem>
      </GridContainer>
    </SectionService>
  )
}



