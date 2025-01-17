import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import CreateComment from './CreateComment';
import ShowComment from './ShowComment';
import { likeIt } from '../../store/actions/postActions';

const PostDetails = (props) => {
  const { id, post, auth, comments } = props;
  if (!auth.uid) return <Redirect to='signin' />

  const handleClick = (e) => {
    props.likeIt(post, id);
    //change icon color to pink
  }



  if (post) { 
    if (auth.uid == post.authorId) {
      var enable_like = <i className="material-icons tooltipped" data-position="top" data-tooltip="You can't like your own post."> thumb_up</i>
    } else if ( post.likes.some(uid => uid === auth.uid) ) {
      var enable_like = <i className="material-icons pink-text tooltipped" data-position="top" data-tooltip="You already liked this post."> thumb_up</i>
    } else {
      var enable_like = <a  onClick={handleClick} className="tooltipped" data-position="top" data-tooltip="Like it."><i className="material-icons"> thumb_up</i></a>
    }

    return (
      <div className="container section post-details" style={{background: 'rgb(245,245,245,0)'}} >
        <div className="card z-depth-0" style={{background: 'rgb(255,255,255,.8)'}} >
          <div className="card-content">
            <span className="card-title"> {post.title}</span>	
            <p>{ post.content }</p>
          </div>
          <div style={{background: 'rgb(245,245,245,.3)'}} className="card-action grey-text ">
            <div>Posted by {post.authorFirstName} {post.authorLastName}  
              {enable_like} {post.likes.length} likes
            </div>
            <div> {moment(post.createdAt.toDate()).calendar()} </div>
            <CreateComment parentId={ id }/>
            <div className="comment-list section">
              { comments.map(c => <ShowComment comment={c} /> ) }
            </div>
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
    const comments = posts ? Object.values(posts)
                             .filter(p => p.parentId === id)
                             .sort((a, b) =>  b.total_likes - a.total_likes ) : null;
  return {
    auth: state.firebase.auth,
    post: post,
    posts: posts,
    id: id,
    comments: comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likeIt: (post) => dispatch(likeIt(post))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails);
