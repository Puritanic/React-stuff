import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from './store/actions';
import { NavLink, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };

  renderPosts = () =>
    _.map(this.props.posts, post => (
      <li key={post.id} className="list-group-item">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    ));

  render() {
    return (
      <div className="container">
        <div className="text-right mt-3">
          <NavLink className="btn btn-primary" to="/posts/new">
            New Post
          </NavLink>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(App);
