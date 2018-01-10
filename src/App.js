import React from 'react';
import BookShelf from './BookShelf';

import * as BooksAPI from './BooksAPI';
import SearchBook from './SearchBook';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  componentDidMount () {
    BooksAPI.getAll().then(books => {
      console.log({books});
      this.setState({books});
    });
  }

  changeShelf = (e, singleBook) => {
    //update the "shelf" value on the books
    const books = this.state.books
    const shelf = e.target.value
    singleBook.shelf = e.target.value
    this.setState({
      books
    });

    // update the API to show in the correct order??
    BooksAPI.update(singleBook,shelf). then(() => {
     this.setState(state => ({
       books: state.books
       .filter(x => x.id !== singleBook.id)
       .concat([singleBook])
     }));
    });
  };

  render () {
    return (
      <div className="app">
        {this.state.showSearchPage
          ? <div className="search-books">
              <div className="search-books-bar">
                <a
                  className="close-search"
                  onClick={() => this.setState({showSearchPage: false})}
                >
                  Close
                </a>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid" />
              </div>
            </div>
          : 
              <div className="list-books-content">
                <div> 
                  <BookShelf 
                    books={this.state.books}
                    changeShelf={this.changeShelf}
                  />
              </div>
            </div>}
      </div>
    );
  }
}

export default BooksApp;
