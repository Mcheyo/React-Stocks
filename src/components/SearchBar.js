import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort == "Alphabetically"} onChange={(e) => props.changeSort(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort == "Price"} onChange={(e) => props.changeSort(e.target.value)}/>
        Price
      </label>
      <label>
      <input type="radio" value="All" checked={props.sort == "All"} onChange={(e) => props.changeSort(e.target.value)}/>
      All 
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) =>props.changeFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="All">All</option>

          
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
