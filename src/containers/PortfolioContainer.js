import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.myStocks.map(stock => <Stock stockInfo={stock} key={stock.id} handleStock={this.props.removeStock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
