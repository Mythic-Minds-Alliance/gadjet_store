import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';

import './Search.scss';
import searchIcon from '../../icons/search.png';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const handleSearchInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleToggle = () => {
    setIsHidden(prevIsHidden => !prevIsHidden);
  };

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Explore our electronic inventory..."
        onChange={handleSearchInputChange}
        value={searchQuery}
        className={classNames('Search--input', {
          'Search--input-hidden': isHidden,
          'Search--input-on': !isHidden,
        })}
      />
      <button
        onClick={handleToggle}
        className="Search--btn"
        type="button"
      >
        <img
          src={searchIcon}
          alt="search img"
          className="Search--icon"
        />
      </button>
    </div>
  );
};
