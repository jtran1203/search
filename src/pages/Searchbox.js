import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel Button } from 'react-bootstrap';

class Searchbox extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchResults: []
        }
    }

    onChange(e) {
        this.setState({searchText: e.target.value});
    }

    getResults() {
        calltodb(searchText).then(e => {
            this.setState({searchResults: e.value})
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <SearchResults />
            </div>
        )
    }
}

export default Searchbox;
