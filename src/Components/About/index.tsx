import { SectionContainer, TextContainer, Image } from "./style";
import aboutImg from '../../assets/about.png'

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <TextContainer>
        <h3>Sobre Nós</h3>
        <h2>O que é Molme?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget augue eu odio
          rhoncus bibendum at a libero. Nulla facilisi. Curabitur sit amet ligula id mi
          rhoncus gravida. In hac habitasse platea dictumst.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque itaque, nam officia quasi ab alias possimus recusandae, excepturi, voluptas voluptate mollitia laborum ex tenetur saepe libero aspernatur repellendus repudiandae.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sit quod incidunt ea adipisci alias odit vero facere, ab sed. Tempore quod ipsam quae. Ea ducimus vero omnis maiores animi!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ut maiores placeat vel adipisci. Sapiente porro facilis quos corporis odit, nemo repellat laboriosam. Beatae expedita quis tempore cumque architecto velit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate quam possimus officiis sunt dolore, sapiente velit aperiam architecto, maxime placeat eaque incidunt quos modi pariatur molestiae voluptate, officia itaque?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, praesentium. Repudiandae necessitatibus quaerat voluptas optio fuga, natus rerum eligendi ab tempora porro. Exercitationem quam illo ut necessitatibus alias repellendus repudiandae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laborum eum, officiis explicabo consequuntur consectetur, illo iusto debitis, tempore quia est alias quam? Debitis dolor corporis dolorem laboriosam minus enim!
        </p>
      </TextContainer>
      <Image src={aboutImg} alt="Descrição da imagem" />
    </SectionContainer>
  );
}