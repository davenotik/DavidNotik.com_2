import Header from './Header'
import React from 'react'

export default class AppView extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header/>
        {this.props.blogList}
      </div>
    );
  }
}