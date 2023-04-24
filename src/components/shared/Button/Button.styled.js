import styled from 'styled-components';

export const Btn = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
  background-color: ${props => (props.following ? '#5cd3a8' : '#ebd8ff')};
  padding: 14px 56px;
  border: none;
  border-radius: 10px;
`;
