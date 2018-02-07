import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../store/actions';

class BookList extends Component {
  renderList = () =>
    this.props.books.map(book => (
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}
        onKeyDown={() => this.props.selectBook(book)}
        role="menuitem"
      >
        {book.title}
      </li>
    ));

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

const mapStateToProps = state => ({
  books: state.books.books
});

const mapDispatchToProps = dispatch => ({
  selectBook: book => dispatch(selectBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
