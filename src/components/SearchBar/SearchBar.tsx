import React from 'react'
import classes from "./SearchBar.module.css";
import searchIcon from "./search-icon.png";

const SearchBar = () => {
    return (
        <>
            <input className={classes.searchField} type={"search"} placeholder={"Введите название книги..."}/>
            <div className={classes.searchButton}>
                <img src={searchIcon} alt="Search"/>
            </div>
        </>

    )
}

export default SearchBar