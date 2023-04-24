import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redax/operations';
import { addPage } from '../../redax/tweetsSlise';
import { selectPage, selectUsers, selectLoading } from 'redax/selectors';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { GoBack } from 'components/shared/GoBack/GoBack';
import { Button } from 'components/shared/Button/Button';
import { Container, List, BtnLoadMore } from '../Tweets/Tweets.styled';

export const Tweets = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectPage);
  const users = useSelector(selectUsers);
  // const isLoading = useSelector(selectLoading);

  const onClickLoadMore = () => {
    dispatch(addPage(pageNumber + 1));
  };

  useEffect(() => {
    dispatch(getUsers(pageNumber));
  }, [dispatch, pageNumber]);
  return (
    <Container>
      <GoBack to="/">
        <Button btnName={'GO BACK'} />
      </GoBack>
      <List>
        <TweetsList />
      </List>
      {users.length < 13 && (
        <BtnLoadMore onClick={onClickLoadMore}>LOAD MORE</BtnLoadMore>
      )}
    </Container>
  );
};
