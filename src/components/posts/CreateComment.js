import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class CreateComment extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost({ ...this.state, likes: 0, title: 'Comment', parentId: this.props.parentId });
    this.setState({ content: '' });
  }


  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='signin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h6 className="grey-text text-darken-3">What do you think?</h6>
          <div className="input-field">
            <label htmlFor="content">Your thoughts.</label>
            <textarea value={this.state.content} id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Share</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
