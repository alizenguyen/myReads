import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SavedBooks extends Component {
    state = {
        query: ''
    }
    
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MY LIBRARY</h1>
                </div>
                <div className="list-books-content">
                </div>
            </div>
        )
    }
}

export default SavedBooks