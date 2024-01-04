import styled from "styled-components";

export const SectionService = styled.section`
  h3{
    color: #34AB8D;
    margin-bottom: 10px;
  }
  h2{
    color: #616161;
    margin-bottom: 60px;
  }
  padding: 20px;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const GridItem = styled.div`
  width: 252px;
  height: 160px;
  background-color: #D9D9D9; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  &:hover {
    background-color: #34AB8D;
    transition: 0.5s;
  }
`;

