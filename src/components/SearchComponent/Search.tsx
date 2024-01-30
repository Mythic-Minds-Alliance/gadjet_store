import React, { useState, ChangeEvent } from 'react';
import classNames from 'classnames';
import './Search.scss';
import searchIcon from '../../icons/search.png';

type Props = {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
};

export const Search: React.FC<Props> = ({
  setSearchQuery,
  searchQuery,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
