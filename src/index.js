import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore }  from 'redux-firestore';
import { reactReduxFirebase, getFirebase }  from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

// react-redux-firebase options
const rrfConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  useFirestoreForProfile: true, //load profile from matching uid in firestore
  attachAuthIsReady: true, // attaches auth is ready promise to store
  firebaseStateName: 'firebase' // should match the reducer name ('firebase' is default)
}


  // Add redux Firebase to compose
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(fbConfig),
      reactReduxFirebase(firebase, rrfConfig)
    )
  )

  // Listen for auth ready (promise available on store thanks to attachAuthIsReady: true config option)
  store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.register();
  })
