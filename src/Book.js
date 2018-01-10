import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };
  render () {
    const {books} = this.props;
    
    return (
    <div className="bookshelf-books">
        <ol className="books-grid">
        {books.length > 0 && books.map(singleBook => 
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
                        <select name="bookShelf" value={books.self} onChange={e =>this.props.chagneShelf(e, singleBook)} >
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
                        {books.authors ? singleBook.authors.join(","): ""}
                    </div>
                </div>
                </li>
                    )}
                    </ol>
                </div>

    );
  }
}
export default Book;
