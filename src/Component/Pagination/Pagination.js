import React  from "react"
import classes from "./Pagination.module.css"



const Paginator = ({totalProducts=25, productPerPage=5 , pagination }) =>  {
   const pageNumber = []

    for (let i = 1 ; i <= Math.ceil(totalProducts / productPerPage) ; i++ ){
        pageNumber.push(i)
    }
    return (
        <div className={classes.toRow}>
            <ul>
                {pageNumber.map(numbers => (
                    <li key={numbers} onClick={() => pagination(numbers)} className={classes.number} >
                        <button>{numbers}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Paginator