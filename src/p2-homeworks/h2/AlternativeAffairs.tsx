import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from "./Affairs.module.css";

type AltAffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filterValue: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

type FilterValueType = "all" | "high" | "middle" | "low";

function AlternativeAffairs(props: AltAffairsPropsType) {
    const affairsToRender = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const onFilterClickHandler = (filterValue: FilterValueType) => {
        props.setFilter(filterValue)
    }

    return (
        <div className={styles.affairsWrap}>

            {affairsToRender}

            <button className={styles.filterAffairsButton}
                    onClick={()=> onFilterClickHandler("all")}>All</button>
            <button className={styles.filterAffairsButton}
                    onClick={()=> onFilterClickHandler("high")}>High</button>
            <button className={styles.filterAffairsButton}
                    onClick={()=> onFilterClickHandler("middle")}>Middle</button>
            <button className={styles.filterAffairsButton}
                    onClick={()=> onFilterClickHandler("low")}>Low</button>
        </div>
    )
}

export default AlternativeAffairs
