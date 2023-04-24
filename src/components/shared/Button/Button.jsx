import { Btn } from './Button.styled';

export const Button = ({ onClick, btnName, following }) => {
  return (
    <Btn onClick={onClick} following={following}>
      {btnName}
    </Btn>
  );
};
