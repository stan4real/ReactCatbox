import React from "react"
const Price = ({price}) => {
    return (
        <h3>  {new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        currencyDisplay:'narrowSymbol'
        }).format(price)}
        </h3>
    )
}

export default React.memo(Price)