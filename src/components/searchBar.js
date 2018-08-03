import React, { Component } from 'react';
import SearchResults from './searchResults';
import './searchBar.css';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
        this.setState({
            searchTerm: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div className="searchBar">
                <input 
                    onChange={this.handleChange}
                    value={this.state.searchTerm}
                    className="searchInput"
                />
                <button onSubmit={this.handleSubmit} className="searchButton"><i class="fa fa-search "></i></button>
                <SearchResults searchTerm={this.state.searchTerm}/>
            </div>
        )
    }
}

export default SearchBar;