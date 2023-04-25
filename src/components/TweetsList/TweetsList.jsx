import { useSelector } from 'react-redux';

import { filteredTweets } from 'redax/selectors';
import { TweetCard } from '../TweetCard/TweetCard';

export const TweetsList = () => {
  const users = useSelector(filteredTweets);

  return users.map(({ id, ...restProps }) => (
    <li key={id}>
      <TweetCard id={id} {...restProps} />
    </li>
  ));
};
