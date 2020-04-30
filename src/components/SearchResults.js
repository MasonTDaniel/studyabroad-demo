import React, { Component } from 'react'
import { Table } from 'reactstrap'

class SearchResults extends Component {

    render() {
        // Make a table of programs and store it
        let filteredPrograms = this.props.state.filteredProgramList.map((program) => {
            return (
                <tr key={program.id}>
                    <td>{program.term}</td>
                    <td>{program.country}</td>
                    <td>{program.name}</td>
                    <td>{program.areaOfStudy}</td>
                    <td>{program.language}</td>
                    <td>{program.cost}</td>
                    <td><a href={"https://" + program.website} target="_blank" rel="noopener noreferrer">{program.website}</a></td>
                </tr>
            )

        });
        if (Array.isArray(filteredPrograms) && filteredPrograms.length === 0) {
            return (
                <div>
                    <h5 style={{ "textAlign": "center", "marginTop": "2rem" }}>No Results</h5>
                </div>
            )
        }
        return (
            <div className="result">
                <Table>
                    <thead>
                        <tr>
                            <th>Term</th>
                            <th>Country</th>
                            <th>Name</th>
                            <th>Area of Study</th>
                            <th>Language</th>
                            <th>Cost</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPrograms}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default SearchResults;
