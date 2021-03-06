import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import axios from 'axios';

/* This is the parent component for the search feature. Its children include SearchBar and SearchResults */

/* Take in program data from database into an array, and pass down data to SearchBar via props to populate dropdowns */
class SearchComponent extends Component {

    /* Sets the programs array to empty initially */
    constructor(props) {
        super(props);
        this.state = {
            programs: [],
        };
    }
    /* Function that lets us fetch from the database
        Data of all programs passed into an array of object called programs*/
    componentDidMount() {
        let initialPrograms = [];
        /* Fetch the data from the database */
        axios.get('https://studyabroad-test-server.herokuapp.com/db')
            /* Promise fulfilled */
            .then(response => {
                initialPrograms = response.data.allPrograms.map((program) => {
                    return program
                });
                /* Set our new state with the programs array filled with the programs from the array found in the data */
                this.setState({
                    programs: initialPrograms
                });
            })
        /* Examine the data and then map it to our initialPrograms array */

    }

    /* What we actually see on the webpage—SearchBar */
    render() {
        return (
            <div>
                <h6 style={{ "textAlign": "right", "color": "gray" }}>
                    (Demo Version. <a href="https://github.com/MasonTDaniel/studyabroad-demo" target="_blank" rel="noopener noreferrer"> Code for this UI demo</a> and <a href="https://github.com/MasonTDaniel/study-abroad-recommender" target="_blank" rel="noopener noreferrer">Code for the whole project</a>)</h6>
                <h5 style={{ "textAlign": "center" }}>Search for study abroad programs recommended by SU below</h5>
                <SearchBar state={this.state} />
            </div>
        )
    }
}

export default SearchComponent;