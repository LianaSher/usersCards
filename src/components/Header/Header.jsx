import { Outlet } from 'react-router-dom';
import { Nav, NavLink } from '../Header/Header.styled';
import { useDispatch } from 'react-redux';
import { addPage } from 'redax/tweetsSlise';

export const Header = () => {
  const dispatch = useDispatch();

  const toTweets = () => {
    dispatch(addPage(1));
  };

  return (
    <>
      <div>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets" onClick={toTweets}>
            Tweets
          </NavLink>
        </Nav>
      </div>
      <Outlet />
    </>
  );
};
