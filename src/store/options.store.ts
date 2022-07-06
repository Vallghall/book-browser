import {makeAutoObservable} from "mobx"


class OptionsStore {
    constructor() {
        this.query = ""
        this.category = "all"
        this.sorting = "relevance"
        this.startIndex = 0
        makeAutoObservable(this)
    }
    readonly step = 30

    startIndex: number

    query: string

    category: string

    sorting: string

    updateQuery(query: string) {
        this.query = query
    }

    changeCategory(category: string) {
        this.category = category
    }

    changeSorting(sorting: string) {
        this.sorting = sorting
    }

    changeStartIndex(index: number) {
        this.startIndex = index
    }
}

export const optionsStore = new OptionsStore()