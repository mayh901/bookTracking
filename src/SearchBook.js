import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Book from './Book';
import * as BooksAPI from './BooksAPI'


class SearchBook extends Component {
  state = {
    query:"",
    searchedBooks:[]
  };
// worked with teammate to help solve my search 
//and mentor to help debug 

  queryTitle = e => {
    const query = e.target.value;
    this.setState({query: query});
    //searchbook holds the search returned form the API 
    if (this.state.query) {
      this.searchedBooks = BooksAPI.search(this.state.query).then (result => {
       // if there is a result return to screen 
        if(result.length > 0){
        return this.setState ({searchedBooks: result}) 
       } else{
         // return empyt array else
         this.setState ({searchedBooks: []})}
    });
  }
else{
  this.setState ({searchedBooks: []})
}
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
        onChange={this.queryTitle}
        value={this.state.query}
        />
        </div>
        </div>
        <div className="search-books-results">
        {/* return book componenent if the searched books is >0 */}
        {this.state.searchedBooks.length > 0 && 
       <Book 
       books={this.state.searchedBooks}
       changeShelf={this.props.changeShelf}
       />}
    </div>
      </div>
     
    );
  }
}

export default SearchBook;