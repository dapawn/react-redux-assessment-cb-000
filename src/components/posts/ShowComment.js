import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { likeIt } from '../../store/actions/postActions';

const ShowComment = (props) => {
  const { comment, auth } = props;
  if (!auth.uid) return <Redirect to='signin' />

  const handleClick = (e) => {
    props.likeIt(comment);
  }

  if (comment) { 
    if (auth.uid == comment.authorId) {
      var enable_like = <i className="material-icons"> thumb_up</i>
    } else if ( comment.likes.some(uid => uid === auth.uid) ) {
      var enable_like = <i className="material-icons pink-text"> thumb_up</i>
    } else {
      var enable_like = <a  onClick={handleClick}><i className="material-icons"> thumb_up</i></a>
    }

    return (
      <div className="container section comment-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <p>{ comment.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {comment.authorFirstName} {comment.authorLastName} 
              {enable_like} {comment.likes.length} likes
            </div>
            <div> {moment(comment.createdAt.toDate()).calendar()} </div>
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
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likeIt: (comment) => dispatch(likeIt(comment))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(ShowComment);
