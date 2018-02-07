import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../store/actions';

class ShowPost extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  };

  onDelete = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return (
        <div className="container text-center">
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div className="container mt-5">
        <Link className="btn btn-info mb-4" to="/">
          Go back to the Homepage
        </Link>
        <button
          onClick={this.onDelete}
          className="btn btn-danger float-sm-right"
        >
          Delete post
        </button>
        <h3 className=" mb-4">{post.title}</h3>
        <h6 className=" mb-4">Categories: {post.categories}</h6>
        <p className=" mb-4">{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchPost, deletePost })(withRouter(ShowPost));
