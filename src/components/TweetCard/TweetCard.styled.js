import styled from 'styled-components';
import picture from '../../images/picture.png';

export const CardContainer = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  border: 1px solid #000;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    rgba(71, 28, 169, 1) 0%,
    rgba(87, 54, 163, 1) 69.1%,
    rgba(75, 42, 153, 1) 100%
  );
`;

export const Wrapper = styled.div`
  height: 214px;
  background-image: url('${picture}');
  background-repeat: no-repeat;
  background-position: 50% 50%;

  &::after {
    content: '';
    display: block;
    height: 8px;
    background-color: #ebd8ff;
    margin-top: 168px;
    box-shadow: inset 0px 3.44px 2.58px rgba(251, 248, 255, 1),
      0px 3.44px 3.44px rgba(0, 0, 0, 0.06),
      inset 0px -1.72px 3.44px rgba(174, 123, 227, 1);
  }
`;
export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Photo = styled.img`
  border-radius: 50%;
  border: 8px solid #ebd8ff;

  object-fit: cover;
  position: absolute;
  top: 180px;
  left: 150px;
`;

export const Counter = styled.p`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.22;
  margin-bottom: 16px;
`;

export const CountersWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 66px;
  padding-bottom: 36px;
`;
