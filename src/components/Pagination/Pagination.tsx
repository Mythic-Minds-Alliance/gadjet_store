import React, { useState } from 'react';
import classNames from 'classnames';

import './Pagination.scss';
import nextPage from '../../images/Slider_button.png';

type Props = {
  postPorPage: number;
  totalPost: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  postPorPage,
  totalPost,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPorPage); i += 1) {
    pages.push(i);
  }

  const handleChangeNextPage = () => {
    if (currentPage < Math.ceil(totalPost / postPorPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChangePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Pagination">
      <button
        className="Pagination--button-next"
        type="submit"
        onClick={handleChangeNextPage}
      >
        <img
          src={nextPage}
          alt="Next Page Button"
        />
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange}
          type="submit"
          className={classNames(
            'Pagination--button', { isActive: page === currentPage },
          )}
        >
          {page}
        </button>
      ))}

      <button
        className="Pagination--button-back"
        type="submit"
        onClick={handleChangePrevPage}
      >
        <img
          src={nextPage}
          alt="Next Page Button"
        />
      </button>
    </div>
  );
};
