import React, {Component} from 'react';
import './App.css';

class Book extends Component {

  render () {
      // store the books coming in 
     const {books} = this.props;
    //breaks down books 
    return (
    <div className="bookshelf-books">
        <ol className="books-grid">
        {/* map over the books to get a single book and fill it in the singleBook aray */}
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
                    {/* stores the starus of bookshelf in perticular book */}
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
                    {/* pulls book title and author form the singlBook array */}
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
