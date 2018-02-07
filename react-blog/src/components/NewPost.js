import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createPost } from '../store/actions';

class NewPost extends Component {
  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  };

  renderField = (field) => {
    const { meta: { touched, error }, label } = field;

    return (
      <div className="form-group text-center ">
        <label>{label}</label>
        <input className="form-control" type="text" {...field.input} required />
        <div className="text-danger">{touched && error}</div>
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <form className="container mt-5" onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Post Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <div className="text-center">
          <button type="submit" className="btn btn-md btn-success ">
            Save
          </button>
          <Link to="/" className="btn btn-md btn-warning">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must provide a title for your post!';
  }
  if (!values.categories) {
    errors.categories = 'You must provide a category for your post!';
  }
  if (!values.content) {
    errors.content = 'Your must provide content!';
  }
  return errors;
};

export default reduxForm({
  validate,
  form: 'newPostForm'
})(connect(null, { createPost })(withRouter(NewPost)));
