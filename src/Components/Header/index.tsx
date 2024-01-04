import { HeaderContainer , Navigation } from "./style.ts"
import logoImg from '../../assets/logo.svg'

export function Header(){
  return (
    <HeaderContainer>
      <a href="#">
        <img src={logoImg} alt="logotipo" />
      </a>
      <Navigation>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#wuta">Wuta</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </Navigation>
    </HeaderContainer>
  )
}
