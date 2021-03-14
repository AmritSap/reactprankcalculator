import React from 'react'
import './display.style.css'
export const Display = ({txtDisp,totalValue}) => {
    return (
        <div className="input">
            {totalValue || txtDisp || ".0"
            }
            
        </div>
    )
}
