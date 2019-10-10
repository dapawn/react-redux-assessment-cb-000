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
      createdAt: new Date()
    }).then( () => {
      dispatch({type: 'CREATE_POST', post});
    }).catch( (err) => {
      dispatch({type: 'CREATE_POST_ERROR', err});
    })
  }
}

export const likeIt = (post, id) => {
  console.log('In postActions.likeIt');
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async db call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('posts').doc(id).update({
      likes: [...post.likes, authorId]
    }).then( () => {
      dispatch({type: 'LIKE_POST', post});
    }).catch( (err) => {
      dispatch({type: 'LIKE_POST_ERROR', err});
    })
  }
}
