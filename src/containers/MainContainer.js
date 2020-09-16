import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = { 
    stocks: [], 
    portfolioStocksIds: [], 
    filter: "All",
    sort: "All"
  }
  componentDidMount(){ 
    fetch(`http://localhost:3000/stocks`)
    .then(res => res.json())
    .then(stocksArray => this.setState({stocks: stocksArray }))
  }
  addStock = id => { 
    if(!this.state.portfolioStocksIds.includes(id)){ 
      this.setState({
        portfolioStocksIds: [...this.state.portfolioStocksIds, id]
      })
    }
    // let newStock = this.state.stocks.find(stock => stock.id === id)
    // this.setState({portfolioStocks: [...this.state.portfolioStocks, newStock]})
  }

  removeStock = id => { 
  this.setState({ 
    portfolioStocksIds: this.state.portfolioStocksIds.filter(stock => stock !== id)
  })
  }
  

  stocksToDisplay = () => { 
    let filteredStocks = [...this.state.stocks]
    if(this.state.filter !== 'All'){ 
   
      filteredStocks = filteredStocks.filter(stock => stock.type == this.state.filter)
    }

    if(this.state.filter == "All") return filteredStocks



    if(this.state.sort !== "All"){ 
      if(this.state.sort == "Alphabetically")  return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      if(this.state.sort == "Price") return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1) 
      else{ 
        return filteredStocks
      }
    }
    return filteredStocks
  }

  changeFilter = (value) => { 
    this.setState({
      filter: value
    })

  }

  changeSort = (value) => { 
    this.setState({ 
      sort: value
    })
  }

  render() {
    let displayStocks = this.stocksToDisplay()
    let myStocks = this.state.stocks.filter(stock => this.state.portfolioStocksIds.includes(stock.id))
    return (
      <div>
        <SearchBar changeFilter={this.changeFilter} changeSort={this.changeSort} sort={this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={displayStocks} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks ={myStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
