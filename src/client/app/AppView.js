import Header from './Header'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Nav = () =>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/nuggets/">Nuggets</Link>
      </li>
    </ul>
  </nav>;


export default class AppView extends React.Component {
  render() {
    console.log('Props are whatever we gave to the combineTemplate: ', this.props)
    console.log('anotherThing = ', this.props.anotherThing)

    return (
      <Router>
        <div className="main-container">
          <Header/>
          <Nav/>
          <div>
            <h2>Nugget list</h2>
            <Route path="/nuggets/" render={() => this.props.nuggetList} />
          </div>
          <div>
            <h2>Blog list</h2>
            <Route path="/blog/" render={() => this.props.blogList} />
          </div>
        </div>
      </Router>
    );
  }
}
