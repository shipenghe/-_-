import React, { Component } from 'react'
import './Zero.less'
import ShowSeat from '../../components/show-seat'

const seatName = '零点'
export default class Zero extends Component {
  render() {
    return (
      <div style={{ display: 'flex', height: '100%', position: 'relative' }}>
        <ShowSeat seat={seatName}></ShowSeat>
      </div>
    )
  }
}
