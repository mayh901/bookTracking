import React, {Component} from 'react';
import Book from './Book';

class BookShelf extends Component{
    //will hold the state of what is happining
    state={};

    render(){
        const {books}= this.props;
        
        // create the shelf types with filter 
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
        const wantToRead = books.filter(book => book.shelf === "wantToRead");
        const read = books.filter(book => books.shelf === "read");

        return(
            // header
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
            {/* currently reading bookshelf */}
            <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                   { currentlyReading.lenght > 0 &&
                   <book 
                    books={currentlyReading}
                    changeShelf={this.props.changeShelf}
                   />}
            </div>
             {/* want to read bookshelf */}
            <div className="bookshelf">
                    <h2 className="bookshelf-title">Want To Read</h2>
                   { wantToRead.lenght > 0 &&
                   <book 
                    books={wantToRead}
                    changeShelf={this.props.changeShelf}
                   />}
            </div>
             {/* read bookshelf */}
            <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                   { read.lenght > 0 &&
                   <book 
                    books={read}
                    changeShelf={this.props.changeShelf}
                   />}
            </div>
            </div>
            </div>
            {/* search part brought in */}
            </div>

        )


    }
}