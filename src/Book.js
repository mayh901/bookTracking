import React, {Component} from 'react';
import './App.css';

class Book extends Component {

  render () {
    const {books} = this.props;
    
    return (
    <div className="bookshelf-books">
        <ol className="books-grid">
        {books.length > 0 && 
        books.map(singleBook => (
        <li key={singleBook.id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${singleBook.imageLinks.thumbnail})`,
                        }}
                    />
                    <div className="book-shelf-changer">
                        <select 
                        name="bookShelf" 
                        value={singleBook.shelf}
                        onChange={e =>this.props.changeShelf(e, singleBook)} 
                        >
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{singleBook.title}</div>
                    <div className="book-authors">
                        {singleBook.authors ? singleBook.authors.join(", "): ""}
                    </div>
                </div>
                </li>
                    ))}
                    </ol>
                </div>

    );
  }
}
export default Book;
