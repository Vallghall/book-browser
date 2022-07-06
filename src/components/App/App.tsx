import React from 'react'
import classes from './App.module.css'
import SearchBar from "../SearchBar/SearchBar"
import CategorySelect from "../CategorySelect/CategorySelect"
import SortingSelect from "../SortingSelect/SortingSelect"
import {observer} from "mobx-react-lite"
import ResultBar from "../ResultBar/ResultBar"
import Pagination from "../Pagination/Pagination";

const App = observer(() => {
  return (
    <div className={classes.App}>
        <h1>Book Browser</h1>
        <SearchBar/><br/>
        <CategorySelect/>
        <SortingSelect/>
        <ResultBar/>
        <Pagination/>
    </div>
  )
})

export default App
