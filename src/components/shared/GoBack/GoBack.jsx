import { Link } from 'react-router-dom';
import { GoBackLink } from '../GoBack/GoBack.styled';
export const GoBack = ({ to, children }) => {
  return <GoBackLink to={to}>{children}</GoBackLink>;
};
