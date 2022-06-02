//검색 결과 객체불러오는 페이지
import React from 'react';
import '../css/SearchResult.css';

function SearchResult({
  img,
  location,
  title,
  description,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <div className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total*2}원/2박</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
