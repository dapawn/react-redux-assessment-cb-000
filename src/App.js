import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';
import CreatePost from './components/posts/CreatePost';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return(
    <BrowserRouter>
      <div className="App">
	<Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/post/new' component={CreatePost} />
          <Route path='/post/:id' component={PostDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
