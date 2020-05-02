import './index.less'
import React, { Component } from 'react'
import CanvasLattice from '../canvas-lattice'
import Legend from '../legend'

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      seatObj: {}
    };
  }
  componentWillMount() {
    // 发送请求获取相应座位表对象
    const seatObj = {
      id: '00',
      name: '零点书房',
      x: 8,
      y: 10,
      seatList: [
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 6,
          },
          {
            id: '03',
            type: 6,
          },
          {
            id: '04',
            type: 6,
          },
          {
            id: '05',
            type: 6,
          },
          {
            id: '06',
            type: 6,
          },
          {
            id: '07',
            type: 6,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 7,
          },
          {
            id: '03',
            type: 0,
          },
          {
            id: '04',
            type: 4,
          },
          {
            id: '05',
            type: 4,
          },
          {
            id: '06',
            type: 0,
          },
          {
            id: '07',
            type: 7,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 7,
          },
          {
            id: '03',
            type: 0,
          },
          {
            id: '04',
            type: 4,
          },
          {
            id: '05',
            type: 4,
          },
          {
            id: '06',
            type: 0,
          },
          {
            id: '07',
            type: 7,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 7,
          },
          {
            id: '03',
            type: 0,
          },
          {
            id: '04',
            type: 4,
          },
          {
            id: '05',
            type: 4,
          },
          {
            id: '06',
            type: 0,
          },
          {
            id: '07',
            type: 7,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 7,
          },
          {
            id: '03',
            type: 7,
          },
          {
            id: '04',
            type: 7,
          },
          {
            id: '05',
            type: 7,
          },
          {
            id: '06',
            type: 7,
          },
          {
            id: '07',
            type: 7,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 7,
          },
          {
            id: '03',
            type: 0,
          },
          {
            id: '04',
            type: 4,
          },
          {
            id: '05',
            type: 4,
          },
          {
            id: '06',
            type: 0,
          },
          {
            id: '07',
            type: 7,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 7,
          },
          {
            id: '03',
            type: 0,
          },
          {
            id: '04',
            type: 4,
          },
          {
            id: '05',
            type: 4,
          },
          {
            id: '06',
            type: 0,
          },
          {
            id: '07',
            type: 7,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 7,
          },
          {
            id: '03',
            type: 0,
          },
          {
            id: '04',
            type: 4,
          },
          {
            id: '05',
            type: 4,
          },
          {
            id: '06',
            type: 0,
          },
          {
            id: '07',
            type: 7,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 7,
          },
          {
            id: '03',
            type: 7,
          },
          {
            id: '04',
            type: 7,
          },
          {
            id: '05',
            type: 7,
          },
          {
            id: '06',
            type: 7,
          },
          {
            id: '07',
            type: 7,
          },
          {
            id: '08',
            type: 6,
          },
        ],
        [
          {
            id: '01',
            type: 6,
          },
          {
            id: '02',
            type: 6,
          },
          {
            id: '03',
            type: 6,
          },
          {
            id: '04',
            type: 7,
          },
          {
            id: '05',
            type: 7,
          },
          {
            id: '06',
            type: 6,
          },
          {
            id: '07',
            type: 6,
          },
          {
            id: '08',
            type: 6,
          },
        ],
      ]
    }
    this.setState({
      seatObj
    })
  }
  SeatCol(col) {

  }
  SeatList() {
    const seatObj = this.state.seatObj
    const seatList = seatObj.seatList.map((item, index) =>
      <div className="seat-row" key={seatObj.id + index}>
        {
          item.map((innerItem, innerIndex) =>
            <CanvasLattice type={innerItem.type} key={seatObj.id + index + innerIndex}></CanvasLattice>
          )
        }
      </div>
    );
    return seatList;
  }

  render() {
    return (
      <div className="show-seat">
        <div className="seat-area">
          <div className="seat-list">
            {
              this.SeatList()
            }
          </div>
        </div>
        <div className="legend-area">
          <Legend></Legend>
        </div>
      </div>
    )
  }
}
