import React from 'react'

 const ExpenceDetails=(props) =>{
  return (
    <div>
       <div className="expense-item__description">
        <h2>{props.expenseDetail}</h2>
      
        <div className="expense-item__price">{props.expensePrice}</div>
        </div>
    </div>
  )
}
export default ExpenceDetails;
