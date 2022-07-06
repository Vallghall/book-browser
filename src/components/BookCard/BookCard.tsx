import React from 'react'
import {Item} from "../../store/books.store"
import classes from "./BookCard.module.css"

const BookCard = ({imageLink, categories, title, authors}: Item) => {
    return (
        <div className={classes.BookCard}>
            <img src={imageLink} alt="Book image"/>
            <p><i>{categories?.[0] || "Not mentioned"}</i></p>
            <p><strong>{title}</strong></p>
            <p>{authors?.join("; ") || "authors not mentioned"}</p>
        </div>
    )
}

export default BookCard