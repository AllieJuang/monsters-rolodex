import React from 'react';
import './search-box.style.css';

interface SearchBoxProps {
  placeholder: string;
  searchField: string;
  handelChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({placeholder, searchField, handelChange}) => {
  return (
    <input 
      type="search"
      className="search"
      placeholder={placeholder}
      value={searchField}
      onChange={handelChange}
    />
  )
}