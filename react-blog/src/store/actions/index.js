import axios from 'axios';
import * as types from '../types';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=jesusonthetoast';

export const fetchPosts = () => {
  const req = axios.get(`${rootUrl}/posts${apiKey}`);
  return {
    type: types.FETCH_POSTS,
    payload: req
  };
};

export const createPost = (post, callback) => {
  const req = axios.post(`${rootUrl}/posts${apiKey}`, post);
  req.then(() => {
    callback();
  });
  return {
    type: types.CREATE_POST,
    payload: req
  };
};

export const fetchPost = (id) => {
  const req = axios.get(`${rootUrl}/posts/${id}${apiKey}`);

  return {
    type: types.FETCH_POST,
    payload: req
  };
};

export const deletePost = (id, callback) => {
  axios.delete(`${rootUrl}/posts/${id}${apiKey}`).then(() => {
    callback();
  });

  return {
    type: types.DELETE_POST,
    payload: id
  };
};
