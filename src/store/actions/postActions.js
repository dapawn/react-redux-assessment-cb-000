import { reduxFirestore, getFirestore }  from 'redux-firestore';
import { reactReduxFirebase, getFirebase }  from 'react-redux-firebase';

export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async db call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('posts').add({
      ...post,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      likes: [],
      total_likes: 0,
      createdAt: new Date()
    }).then( (docRef) => {
      docRef.update({id: docRef.id})
      dispatch({type: 'CREATE_POST', post});
    }).catch( (err) => {
      dispatch({type: 'CREATE_POST_ERROR', err});
    })
  }
}

export const likeIt = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async db call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    //You cant like a post you wrote not can you give mulitple likes
    if ( authorId !== post.authorId && !post.likes.some(uid => uid === authorId) ) {
      firestore.collection('posts').doc(post.id).update({
        likes: [...post.likes, authorId],
        total_likes: post.likes.length
      }).then( () => {
        dispatch({type: 'LIKE_POST', post});
      }).catch( (err) => {
        dispatch({type: 'LIKE_POST_ERROR', err});
      })
    } else {
      console.log('You cant like a post you wrote not can you give mulitple likes');
    }

  }
}
