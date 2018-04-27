import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class SavedBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        const books = this.props.books
        const currentlyShelf = books.filter((b) => b.shelf === 'currentlyReading')
        const wantShelf = books.filter((b) => b.shelf === 'wantToRead')
        const readShelf = books.filter((b) => b.shelf === 'read')

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MY LIBRARY</h1>
                </div>
                <BookShelf 
                    title="Currently Reading"  
                    books={books.filter((book) => (book.shelf === "currentlyReading"))} 
                    onChangeBookShelf={this.props.onChange}/>
                <BookShelf 
                    title="Want to Read"  
                    books={books.filter((book) => (book.shelf === "wantToRead"))}
                    onChangeBookShelf={this.props.onChange}/>
                <BookShelf 
                    title="Read" 
                    books={books.filter((book) => (book.shelf === "read"))}
                    onChangeBookShelf={this.props.onChange}/>
            </div>
        )
    }
}

export default SavedBooks