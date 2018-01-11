import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Book from './Book';
import * as BooksAPI from './BooksAPI'


class SearchBook extends Component {
  state = {
    query:"",
    searchedBooks:[]
  };

  queryBooks = query => {
    let searchedBooks= [];
    
    if(query){
      let searchResults = [];

      BooksAPI.search(query).then(results =>{
        if(results && results.length){
          searchResults = results.map(result =>{
            result.shelf = this.addShelf(result);
            return result;
          });
          this.setState({
            searchedBooks: searchResults 
          });
        }else{
          this.setState({
            searchBooks: []
          });
        } 
      });
    }else{
        this.setState({
          searchedBooks: []
        });
      }
      this.setState({
        query: query.trim()     
      });
   };

   addShelf(result){
     let isShelf = this.props.books.filter(book => book.id === result.id);
      return isShelf.length ? isShelf[0].shelf  :"none";
   }

      
    
  render () {
  
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
        <input 
        type="text" 
        placeholder="Search by title or author" 
        onChange={event=>this.queryBooks(event.target.value)}/>
        </div>
        </div>
        <div className="search-books-results">
        {this.state.searchedBooks.length > 0 && 
       <Book 
       book={this.state.searchedBooks}
       changeShelf={this.props.changeShelf}
       />}
    </div>
      </div>
     
    );
  }
}

export default SearchBook;