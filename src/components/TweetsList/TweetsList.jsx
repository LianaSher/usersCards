import { useSelector } from 'react-redux';
import { selectUsers } from 'redax/selectors';
import { TweetCard } from '../TweetCard/TweetCard';

export const TweetsList = () => {
  const users = useSelector(selectUsers);
  return users.map(({ id, ...restProps }) => (
    <li key={id}>
      <TweetCard id={id} {...restProps} />
    </li>
  ));
};
