import React from 'react'
import BookCard from "../BookCard/BookCard"
import {observer} from "mobx-react-lite"
import {bookStore, QueryStatus} from "../../store/books.store"

import classes from './ResultBar.module.css'


const ResultBar = observer(() => {
    return (
        <>
            {
                (bookStore.queryStatus === QueryStatus.Ready
                    ? <h1>Found items: {bookStore.itemsFound}</h1>
                    : "")
            }

            <div className={classes.ResultBar}>
                {
                    (bookStore.queryStatus === QueryStatus.Ready)
                        ? bookStore.books.map(book => (
                            <BookCard
                                title={book.title}
                                authors={book.authors}
                                categories={book.categories}
                                imageLink={book.imageLink}
                                key={book.id}
                                id={book.id}
                            />
                        ))

                        : (bookStore.queryStatus === QueryStatus.Loading)
                            ? <><p>Loading</p></>
                            : <></>
                }
            </div>
        </>

    )
})

export default ResultBar