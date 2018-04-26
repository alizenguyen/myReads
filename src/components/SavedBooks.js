import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookCategory from './BookCategory'

class SavedBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    } 

    render() {
        const currentlyShelf = this.props.books.filter((b) => b.shelf === 'currentlyReading')

        console.log(currentlyShelf)

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MY LIBRARY</h1>
                </div>
                <div className="list-books-content">
                    <div className="list-books">
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <BookCategory shelf='currently reading'/>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                <div className="list-books-content">
                    <div className="list-books">
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <BookCategory shelf='currently reading'/>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                <div className="list-books-content">
                    <div className="list-books">
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <BookCategory shelf='currently reading'/>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SavedBooks