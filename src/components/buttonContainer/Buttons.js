import React from 'react'
import './buttons.style.css'
const buttons=[7,8,9,4,5,6,1,2,3,0,"/","+","*","-","%","=",".","AC","C","OFF"]
export const Buttons = ({buttonClick}) => {

    return (
        <div className="buttons">
            {
                buttons.map((items,i)=>
                 <button key={i}
                  className="numBtn"
                  onClick={ () => buttonClick(items)}>{items}</button>
                )
            }
        </div>
    )
}
