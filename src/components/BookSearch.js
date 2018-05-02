import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookCategory from './BookCategory'

class BookSearch extends React.Component {
  static propTypes = {
    allBooks: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  state = {
    books: [],
    query: ''
  }

  //Function that handles query updates
  updateQuery = (query) => {
    this.setState( () => ({
      query: query.trim()
    }))
    console.log(query)
    this.handleSearch(query)
  }

  //Function that adds shelf property to all books then matches shelf if already added
  searchShelfChange = (books) => {
    const allBooks = this.props.allBooks

    for(let book of books) {
      book.shelf='none'
    }

    //Will iterate into search result object and saved books object and update the same state on both search page and main application page
    for (let book of books) {
      for (let b of allBooks) {
        if (book.title === b.title) {
          book.shelf = b.shelf
        }
      }
    }

    return books
  }

  //Function the filters through books with imageLinks and authors
  filterBooks = (books) => {
    return books.filter((book) => (book.imageLinks)).filter((book) => (book.authors));
  }

  //Calls on the onchange function and alerts the user that book has been added
  bookRefresh = (b, shelf) => {
    this.props.onChange(b, shelf);

    switch(shelf) {
      case 'wantToRead':
        alert('Book Added - Want to Read');
        break;
      case 'currentlyReading':
        alert('Book Added - Currently Reading');
        break;
      default:
        alert('Book Added - Read')
    }

  }
  
  //Function hat handles the search API and changes the state of of books
  handleSearch = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
      .then((books) => {
        if(books.length > 0) {
          books = this.filterBooks(books);
          books = this.searchShelfChange(books);
          console.log(books);
          this.setState(() => {
            return {books: books}
          })
        } else {
          this.setState({books: [], query: ''})
        }
      })
    }
  }

  render() {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">
              close
            </Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.query.length !== 0 && this.state.books.map((b) => (
                  <BookCategory book={b} key={b.id} title={b.title} author={b.authors} image={b.imageLinks.smallThumbnail} onShelfChange={(shelf) => {this.bookRefresh(b, shelf)}}/>
              ))}
            </ol>
          </div>
        </div>
      )
    }
}
export default BookSearch