import React from 'react'
import {observer} from "mobx-react-lite"

import {bookStore} from "../../store/books.store"
import {optionsStore} from "../../store/options.store"

import classes from "./SearchBar.module.css"
import searchIcon from "./search-icon.png"



const SearchBar = observer(() => {
    return (
        <>
            <input
                className={classes.searchField}
                type={"text"}
                placeholder={"Search books by title..."}
                onChange={({target}) => optionsStore.updateQuery(target.value)}
                onKeyPress={(e) => {
                    if (e.code === "Enter")
                        bookStore.fetchBooks()
                }}
            />
            <div
                className={classes.searchButton}
                onClick={() => bookStore.fetchBooks()}>
                <img src={searchIcon} alt="Search"/>
            </div>
        </>

    )
})

export default SearchBar