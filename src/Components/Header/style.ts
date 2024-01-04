import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #616161;
    font-weight: bold;
    font-size: 16px;
    &:hover {
      color: #34AB8D;
      transition: 0.5s;
    }
  }
`;