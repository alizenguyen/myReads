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
  
  //Functiont hat handles the search API and changes the state of of books
  handleSearch = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
      .then((books) => {
        if(books.length > 0) {
          console.log(books)
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
      const query = this.state

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
                  <BookCategory book={b} key={b.id} title={b.title} author={b.authors} image={b.imageLinks.smallThumbnail} onShelfChange={(shelf) => {this.updateBook(b, shelf)}}/>
              ))}
            </ol>
          </div>
        </div>
      )
    }
}
export default BookSearch