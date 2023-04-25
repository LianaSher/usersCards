import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redax/operations';
import { addPage } from '../../redax/tweetsSlice';
import { selectPage, selectUsers } from 'redax/selectors';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { GoBack } from 'components/shared/GoBack/GoBack';
import { Button } from 'components/shared/Button/Button';
import { Filter } from 'components/Filter/Filter';
import { Container, List, BtnLoadMore, Wrapper } from '../Tweets/Tweets.styled';

export const Tweets = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectPage);
  const users = useSelector(selectUsers);

  const onClickLoadMore = () => {
    dispatch(addPage(pageNumber + 1));
  };

  useEffect(() => {
    dispatch(getUsers(pageNumber));
  }, [dispatch, pageNumber]);
  return (
    <Container>
      <Wrapper>
        <GoBack to="/">
          <Button btnName={'GO BACK'} />
        </GoBack>
        <Filter />
      </Wrapper>
      <List>
        <TweetsList />
      </List>
      {users.length < 13 && (
        <BtnLoadMore onClick={onClickLoadMore}>LOAD MORE</BtnLoadMore>
      )}
    </Container>
  );
};
