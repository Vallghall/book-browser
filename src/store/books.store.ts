import {makeAutoObservable} from "mobx"
import axios from "axios"

import {optionsStore} from "./options.store"


export interface Item {
    id: string
    title: string
    authors : string[]
    categories: string[]
    imageLink: string
}

export enum QueryStatus {
    NeverPerformed,
    Loading,
    Ready
}

class BooksStore {
    constructor() {
        this.books = Array<Item>(0)
        this.itemsFound = 0
        this.url = "https://www.googleapis.com/books/v1/volumes"
        this.queryStatus = QueryStatus.NeverPerformed
        makeAutoObservable(this)
    }

    readonly url: string

    books: Array<Item>

    itemsFound: number

    queryStatus: QueryStatus

    updateQueryStatus(qs: QueryStatus) {
        this.queryStatus = qs
    }

    updateItemsFound(quantity: number) {
        this.itemsFound = quantity
    }

    fetchBooks() {
        this.updateQueryStatus(QueryStatus.Loading)
        axios
            .get(this.url +
                `?key=${process.env.REACT_APP_API_KEY}` +
                `&q=${optionsStore.query}` +
                ((optionsStore.category === 'all') ? '' : `+subject:${optionsStore.category}`) +
                `&maxResults=${optionsStore.step}` +
                `&startIndex=${optionsStore.startIndex * 30}` +
                `&orderBy=${optionsStore.sorting}`,

                {
                    withCredentials: false,
                }
            )
            .then(resp => {
                this.updateItemsFound(resp.data.totalItems)
                this.books = resp.data.items.map((i:any):Item => ({
                    id: i.etag,
                    title: i.volumeInfo.title,
                    authors: i.volumeInfo.authors,
                    categories: i.volumeInfo.categories,
                    imageLink: i.volumeInfo.imageLinks?.thumbnail
                }))
            })
            .then(_ => this.updateQueryStatus(QueryStatus.Ready))
    }
}

export const bookStore = new BooksStore()