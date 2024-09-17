// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }
  searchUserInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filterSearchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-destination-con">
        <div className="data-destination-con">
          <h1 className="heading">Destination Search</h1>
          <div className="search-con">
            <input
              type="search"
              placeholder="search"
              onChange={this.searchUserInput}
              className="destination-search-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
              className="destination-search-icon"
            />
          </div>
          <ul className="destination-items-container">
            {filterSearchResult.map(eachItem => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
