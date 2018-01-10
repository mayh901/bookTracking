import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import * as BooksAPI from '.Books'
import {Link} from 'react-router-dom';

class Books extends Component {
  state = {
    query: '',
    queiredBooks:[]
  };

  updateQuery = query => {
    //this.setState ({query: query.trim ()});
    let queiredBooks = [];
    if (query){
      let queryResults=[];
      
      BooksAPI.search(query).then(results =>{
        
        if(results && results.length){
          queryResults=results.map(result =>{
            result.shelf = this.searchShelf(result);
            return result;
          });
        this.setState({queiredBooks:queryResults
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
  };
  searchShelf(result){
    let isShelf = this.props.books.filter(book =>book.id === result.id);
    return isShelf.lenght ? isShelf[0].shelf : "none";
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
        {this.state.updateQuery.length > 0 && 
       <Book 
       book={this.state.book}
       changeShelf= {this.props.changeShelf}
       />}
    </div>
      </div>
     
    );
  }
}

export default SearchBook;