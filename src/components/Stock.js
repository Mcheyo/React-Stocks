import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={()=>props.handleStock(props.stockInfo.id)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stockInfo.name
          }</h5>
        <p className="card-text">{
            `${props.stockInfo.ticker}: ${props.stockInfo.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
