import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div style={{fontSize:20,fontWeight: 'bold'}}>
        {this.props.children}
      </div>
    )
  }
}
