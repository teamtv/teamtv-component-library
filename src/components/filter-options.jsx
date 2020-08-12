import React from "react";
// import MediaQuery from 'react-responsive';

// import { gotoPath } from 'modules/route';
// import { Carousel } from 'lib/Carousel';

/**
 *
 * ================ TODO ===============
 *  MOVE THIS TO THE COMPONENT LIBRARY
 * ================ TODO ===============
 *
 */

// import "./index.scss";

//   filters: [
//     { path: '#', title: 'Teamontwikkeling' },
//     { path: '#', title: 'Spelerontwikkeling', isActive: true },
//     { onClick: console.debug, title: 'Persoonlijke ontwikkeling' },
//   ],
export const FilterOptions = ({ filters = [] }) => {
  filters = filters.map((filter) => {
    return {
      ...filter,
      onClick: () => {
        if (filter.onClick) {
          filter.onClick();
        } else {
          console.debug(`TODO: implement gotoPath`, filter.path);
        }
      },
    };
  });

  return (
    <div className="filter-options">
      {/* <MediaQuery query="(max-width: 767px)">
        {matches =>
          matches ? (
            <Carousel
              activeIndex={filters.findIndex(filter => filter.isActive)}
              onExited={idx =>
                window.setTimeout(() => filters[idx].onClick(), 0)
              }
            >
              {filterItems(filters)}
            </Carousel>
          ) : (
            filterItems(filters)
          )
        }
      </MediaQuery> */}
      {filterItems(filters)}
    </div>
  );
};

const filterItems = (filters) => {
  return filters.map((filter, idx) => {
    return (
      <button
        type="button"
        className={`btn btn-link ${filter.isActive ? "active" : ""}`}
        data-path={filter.path}
        onClick={filter.onClick}
        key={idx}
      >
        {filter.title}
      </button>
    );
  });
};
