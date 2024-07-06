import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="searchBar">
            <SearchInputBox searchValue={searchValue} setSearchValue={setSearchValue} onSubmit={onSubmit} />
            <SearchButton searchValue={searchValue} onSubmit={onSubmit} />
        </div>
    );
};

const SearchInputBox = ({ searchValue, setSearchValue, onSubmit }) => {
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit(searchValue);
        }
    };

    return (
        <input className="searchInputBox" onChange={handleChange} onKeyDown={handleKeyDown} ></input>
    );
};

const SearchButton = ({ searchValue, onSubmit }) => {
    const handleClick = () => {
        onSubmit(searchValue);
    };

    return (
        <button className="searchButton" onClick={handleClick}></button>
    );
};

export default SearchBar;
