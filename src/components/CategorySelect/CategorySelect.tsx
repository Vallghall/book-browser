import React from 'react'
import {observer} from "mobx-react-lite"
import {optionsStore} from "../../store/options.store"

const CategorySelect = observer(() => {
    return (
        <>
            <strong>Category: </strong>
            <select
                name="sorting-select"
                id="sorting_select"
                defaultValue={"all"}
                onChange={({target}) => optionsStore.changeCategory(target.value)}>
                <option value="all">All</option>
                <option value="Art">Art</option>
                <option value="Biography">Biography</option>
                <option value="Computers">Computers</option>
                <option value="History">History</option>
                <option value="Medicine">Medicine</option>
                <option value="Poetry">Poetry</option>
            </select>
        </>
    )
})

export default CategorySelect