import React from 'react'
import * as BooksAPI from './BooksAPI'
import SavedBooks from './components/SavedBooks'
import BookSearch from './components/BookSearch'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  //Function will retreive all books when component is invoed into the DOM
  componentDidMount() {
    this.handleBooksRetreival();
  }

  //Function that makes an API to retreive all saved books
  handleBooksRetreival = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        console.log(books);
    })
  }

  //Function that makes an API to update the shelf of a saved book
  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.handleBooksRetreival();
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <SavedBooks 
              books={this.state.books}
              onChange={this.handleShelfChange}
              />
            <Link to='/search'>
              <button className="add-button"></button>
            </Link>
          </div>
        )} />
        <Route path='/search' render={(history) => (
          <div>
            <BookSearch 
              allBooks={this.state.books} 
              onChange={this.handleShelfChange}
              />
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
