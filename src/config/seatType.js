import img0 from '../assets/imgs/free.png'
import img1 from '../assets/imgs/mine.png'
import img2 from '../assets/imgs/others.png'
import img3 from '../assets/imgs/unavailable.png'
import img4 from '../assets/imgs/desk.png'
import img5 from '../assets/imgs/book.png'
import img6 from '../assets/imgs/wall.png'

const seatType = {
  0: '空闲',
  1: '我的',
  2: '他人',
  3: '暂不可用',
  4: '书桌',
  5: '书架',
  6: '墙壁',
  7: '过道'
}
function getLatticeType(index) {
  switch (index) {
    case 0:
      return img0
    case 1:
      return img1
    case 2:
      return img2
    case 3:
      return img3
    case 4:
      return img4
    case 5:
      return img5
    case 6:
      return img6
    default:
      break;
  }
}
export { seatType }
export default getLatticeType;