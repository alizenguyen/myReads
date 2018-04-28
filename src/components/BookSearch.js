import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookSearch extends React.Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState( () => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  render() {
      const query = this.state
      const {books} = this.props

      const showBooks = query === ''
        ? books
        : books.filter((b) => (
          b.title.toLowerCase().includes(query.toLowerCase())
        ))

      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>
              close
            </Link>
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
      )
    }
}
export default BookSearch