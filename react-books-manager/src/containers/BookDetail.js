import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        {this.props.book ? (
          <React.Fragment>
            <h3>{this.props.book.title}</h3>
            <h5>Author: {this.props.book.author}</h5>
            <p>Pages: {this.props.book.pages}</p>
          </React.Fragment>
        ) : (
          'Discover something new, select a book!'
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.books.selectedBook
});

export default connect(mapStateToProps)(BookDetail);
