import styled from "styled-components";
import bannerImg from '../../assets/banner.png';

export const SectionContainer = styled.section`
  text-align: left;
  padding: 100px 0;
  height: 600px;
  margin-top: 20px;
  margin-bottom: 110px;
  background-image: url(${bannerImg});
  background-size: cover;
  border-radius: 16px;
`;

export const MainText = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 140px;
  margin-bottom: 20px;
  margin-left: 18px;
  padding: 12px;
  color: #34AB8D;
`;

export const SubText = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
  color: #fff;
  margin-left: 18px;
`;