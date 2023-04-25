import { useDispatch } from 'react-redux';
import { filterTweets } from '../../redax/filterSlice';

import { Select } from '../Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const choise = e.target.value;

    dispatch(filterTweets(choise));
  };

  return (
    <Select
      onChange={onChange}
      aria-label="select"
      name="filter"
      required
      defaultValue="default"
    >
      <option value="default" disabled>
        Select filter
      </option>
      <option value="all">All</option>
      <option value="follow">Follow</option>
      <option value="following">Following</option>
    </Select>
  );
};
