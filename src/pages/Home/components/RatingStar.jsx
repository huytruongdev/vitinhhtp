import React from 'react'

const RatingStar = ({average}) => {
  return (
    <li>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <span className="p-count-rate">({average})</span>
    </li>
  );
}

export default RatingStar