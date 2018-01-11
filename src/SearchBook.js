import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Book from './Book';
import * as BooksAPI from './BooksAPI'


class SearchBook extends Component {
  state = {
    query: "",
    queiredBooks:[]
  };

  updateQuery = query => {
   let queiredBooks = [];
    
    if (query){
      let queryResults=[];
      
      BooksAPI.search(query).then(results => {  
        if(results && results.length){
          queryResults=results.map(result => { 
            result.shelf = this.searchShelf(result);
            return result;
          });
        this.setState({
          queiredBooks: queryResults
        });
      }else{
          this.setState({
            queiredBooks:[]
          });
        }
      });
    }else{
        this.setState({
          queiredBooks:[]
        });
    }
    this.setState({
      query: query.trim()
    });
  };

  searchShelf(result){
    let isShelf = this.props.books.filter(book =>book.id === result.id);
    return isShelf.length ? isShelf[0].shelf : "none";
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
        onChange={event=>this.updateQuery(event.target.value)}/>
        </div>
        </div>
        <div className="search-books-results">
        {this.state.queiredBooks.length > 0 && 
       <Book 
       book={this.state.queiredBooks}
       changeShelf={this.props.changeShelf}
       />}
    </div>
      </div>
     
    );
  }
}

export default SearchBook;