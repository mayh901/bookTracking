import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Books extends Component {
  static propTypes = {
    books: Proptypes.array.isRequired,
  };

  state = {
    query: '',
  };

  updateQuery = query => {
    this.setState ({query: query.trim ()});
  };
  clearQuery = () => {
    this.setState ({query: ''});
  };

  render () {
    const {books} = this.props;
    const {query} = this.state;

    let showingBooks;
    if (query) {
      const match = new RegExp (escapeRegExp (query), 'i');
      showingBooks = this.props.books.filter (books => match.test (books.name));
    } else {
      showingBooks = books;
    }
    showingBooks.sort (sortBy ('name'));

    return (
      <div ClassName="all-books">
        <div ClassName="books-serch-top">
          <input
            ClassName="search-books"
            type="text"
            placeholder="search books"
            value={query}
            onChange={event => this.updateQuery (event.target.value)}
          />
        </div>
      </div>
    );
  }
}
