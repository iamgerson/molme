import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 110px;
  background-image: url('../../assets/banner.png');
`;

export const Image = styled.img`
  max-width: 300px;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  max-width: 600px;
  h3{
    font-weight: 900;
    color: #34AB8D;
    margin-bottom: 10px;
  }
  h2{
    color: #616161;
    margin-bottom: 20px;
  }
  p{
    color: #8B8B8B;
    text-align: justify;
  }
`;