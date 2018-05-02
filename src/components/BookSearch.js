import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import BookCategory from './BookCategory'

class BookSearch extends React.Component {
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

  //Function that adds shelf property to all books
  searchShelfChange = (books) => {
    let allBooks = this.props.allBooks

    for(let book of books) {
      book.shelf='none'
    }

    for (let book of books) {
      for (let c of allBooks) {
        if (c.title === book.title) {
          book.shelf = c.shelf
        }
      }
    }

    return books
  }

  //Function the filters books with imageLinks
  filterBooks = (books) => {
    return books.filter((book) => (book.imageLinks))
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
            <Link to='/' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>
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