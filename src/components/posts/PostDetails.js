import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const PostDetails = (props) => {
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to='signin' />

  if (post) { 
    return (
      <div className="container section post-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {post.title}</span>	
            <p>{ post.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
            <div>On {moment(post.createdAt.toDate()).calendar()} </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <p>Loading post...</p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts
    const post = posts ? posts[id] : null;
  return {
    auth: state.firebase.auth,
    post: post
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails);
