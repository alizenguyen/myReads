import React from 'react'
import * as BooksAPI from './BooksAPI'
import SavedBooks from './components/SavedBooks'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.handleBooksRetreival();
  }

  handleBooksRetreival = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        console.log(books);
    })
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.handleBookeRetreival();
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <SavedBooks 
            books={this.state.books}
            onChange={this.handleBooksRetreival}
            />
        )}
      </div>
    )
  }
}

export default BooksApp
