import * as types from '../types';

export const selectBook = book => ({
  type: types.SELECT_BOOK,
  book
});
