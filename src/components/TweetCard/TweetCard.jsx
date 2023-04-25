import { useDispatch } from 'react-redux';

import { updateUser } from 'redax/operations';
import { useLocalStorage } from '../Hooks/useLocal';
import logoGoIt from '../../images/logoGoIt.svg';
import { Button } from '../shared/Button/Button';

import {
  CardContainer,
  Wrapper,
  Logo,
  Photo,
  Counter,
  CountersWrap,
} from '../TweetCard/TweetCard.styled';

export const TweetCard = ({ id, user, avatar, tweets, followers }) => {
  const [following, setFollowing] = useLocalStorage(`${id}`, false);

  const dispatch = useDispatch();

  const onClick = () => {
    !following ? setFollowing(true) : setFollowing(false);
    dispatch(updateUser(dataForUpdate()));
  };

  const dataForUpdate = () => {
    let followersCounter = followers;

    if (following) {
      followersCounter -= 1;

      return { id, followers: followersCounter };
    } else {
      followersCounter += 1;

      return { id, followers: followersCounter };
    }
  };
  const btnName = following ? 'FOLLOWING' : 'FOLLOW';
  return (
    <CardContainer>
      <Wrapper>
        <Logo src={logoGoIt} alt="logo" width="76" height="22" />
      </Wrapper>
      <Photo src={avatar} alt={user} width="80" height="80" />
      <CountersWrap>
        <Counter>{tweets} TWEETS</Counter>
        <Counter>{followers.toLocaleString('en-US')} FOLLOWERS</Counter>
        <Button onClick={onClick} btnName={btnName} following={following} />
      </CountersWrap>
    </CardContainer>
  );
};
