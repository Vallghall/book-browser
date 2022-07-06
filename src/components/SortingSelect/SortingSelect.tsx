import React from 'react'
import {observer} from "mobx-react-lite"
import {optionsStore} from "../../store/options.store"

const SortingSelect = observer(() => {
    return (
        <>
            <strong>Sort by: </strong>
            <select
                name="sorting-select"
                id="sorting_select"
                defaultValue={"relevance"}
                onChange={({target}) => optionsStore.changeSorting(target.value)}>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
            </select>
        </>
    )
})

export default SortingSelect