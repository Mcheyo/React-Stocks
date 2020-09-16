import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = { 
    stocks: [], 
    portfolioStocks: []
  }
  componentDidMount(){ 
    fetch(`http://localhost:3000/stocks`)
    .then(res => res.json())
    .then(stocksArray => this.setState({stocks: stocksArray }))
  }
  addStock = id => { 
    let newStock = this.state.stocks.find(stock => stock.id === id)
    this.setState({portfolioStocks: [...this.state.portfolioStocks, newStock]})
  }

  removeStock = id => { 
   let newPortfolio = this.state.portfolioStocks.filter(stock => stock.id !== id)
   this.setState({portfolioStocks: newPortfolio})
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks ={this.state.portfolioStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
