import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route }  from 'react-router-dom'

import Home from './components/Home'
import PostDisplay from './components/PostDisplay'
import PostEdit from './components/PostEdit'
import PostForm from './components/PostForm'



class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route  path='/post/:id' component={PostDisplay} />
          <Route  path='/newpost' component={PostForm} />
          <Route  path='/edit/:id' component={PostEdit} />
        </div>
      </Router>
    );
  }
}

export default App;
