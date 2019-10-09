import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ShowComment = (props) => {
  console.log(props);
  const { comment, auth } = props;
  if (!auth.uid) return <Redirect to='signin' />

  if (comment) { 
    return (
      <div className="container section comment-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <p>{ comment.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {comment.authorFirstName} {comment.authorLastName}</div>
            <div>On {moment(comment.createdAt.toDate()).calendar()} </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <p>Loading comment...</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(ShowComment);
