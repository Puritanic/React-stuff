import books from '../../fixtures/books';
import * as types from '../types';

const initialState = {
  books,
  selectedBook: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_BOOK:
      return { ...state, selectedBook: action.book };
    default:
      return state;
  }
};
