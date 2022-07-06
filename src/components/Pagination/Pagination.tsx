import React from 'react'
import {observer} from "mobx-react-lite"
import {bookStore, QueryStatus} from "../../store/books.store"
import {optionsStore} from "../../store/options.store"
import classes from "./Pagination.module.css"
import ReactPaginate from "react-paginate"

const Pagination = observer(() => {
    return (
        (bookStore.queryStatus === QueryStatus.NeverPerformed)
            ? <></>
            :
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(bookStore.itemsFound / optionsStore.step)}
            onPageChange={({selected}) => {
                optionsStore.changeStartIndex(selected)
                bookStore.fetchBooks()
            }}
            containerClassName={classes.navigationButton}
            previousLinkClassName={classes.previousButton}
            nextLinkClassName={classes.nextButton}
            disabledClassName={classes.navigationDisabled}
            activeClassName={classes.navigationActive}
        />
    )
})

export default Pagination
