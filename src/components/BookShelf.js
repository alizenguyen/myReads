import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookCategory from './BookCategory'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    updateBook = (book, shelf) => {
        this.props.onChangeBook(book, shelf)
    }

    render() {
        const books = this.props.books
        const currentlyShelf = books.filter((b) => b.shelf === 'currentlyReading')
        const wantShelf = books.filter((b) => b.shelf === 'wantToRead')
        const readShelf = books.filter((b) => b.shelf === 'read')

        return(
            <div className="list-books-content">
                <div className="list-books">
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((b) => (
                                <BookCategory book={b} key={b.title} title={b.title} author={b.authors} image={b.imageLinks.smallThumbnail} onShelfChange={(shelf) => {this.updateBook(b, shelf)}}/>
                            ))}
                        </ol>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf