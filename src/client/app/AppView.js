import Header from './Header'
import React from 'react'

export default class AppView extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header/>
        <div>
          <h2>Nugget list</h2>
          {this.props.nuggetList}
        </div>
        <div>
          <h2>Blog list</h2>
          {this.props.blogList}
        </div>
      </div>
    );
  }
}
