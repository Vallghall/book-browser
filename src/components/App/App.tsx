import React from 'react'
import classes from './App.module.css'
import SearchBar from "../SearchBar/SearchBar"

const App = () => {
  return (
    <div className={classes.App}>
        <h1>Book Browser</h1>
        <SearchBar/>
    </div>
  )
}

export default App
