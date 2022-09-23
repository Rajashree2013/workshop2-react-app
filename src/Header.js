import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Person from './components/Person';
import Welcome from './components/Welcome';
import CrudDemo from'./CrudDemo';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/welcome'} className="nav-link"> Welcome </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/person'} className="nav-link">Person</Link></li>
            <li><Link to={'/crud'} className="nav-link">Crud</Link></li>
            
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/welcome' component={Welcome} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/person' component={Person} />
              <Route path='/crud' component={CrudDemo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;