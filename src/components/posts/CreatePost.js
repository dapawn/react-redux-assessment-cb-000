import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class CreatePost extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push('/');
  }


  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='signin' />
    return (
      <div className="container" style={{background: 'rgb(255,255,255,.9)'}}>
        <form onSubmit={this.handleSubmit} >
          <h5 className="grey-text text-darken-3">Create Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
