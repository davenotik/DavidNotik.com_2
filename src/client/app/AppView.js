import Header from './Header'
import React from 'react'

export default class AppView extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header/>
        <div>
          {this.props.blogList}
        </div>
        <div>
          {this.props.nuggetList}
        </div>
      </div>
    );
  }
}