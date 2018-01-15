// Created by Hannah May 
// For Udacity Course
// Book tracking app



import React from 'react';
import {Route} from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchBook from './SearchBook';

import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true,
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
       <Route path='/'
       exact
       render={() =>(
         <BookShelf
         books={this.state.books}
         changeShelf={this.changeShelf}
         />
       )}
       />

       <Route path="/search"
       render={() =>(
         <SearchBook
         books={this.state.books}
         changeShelf={this.changeShelf}/>
       )}
       />
      </div>
    );
  }
}

export default BooksApp;
