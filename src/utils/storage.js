// 操作localStorage的工具
import store from 'store'

const userKey = 'user'
export default {
  setUser(user) {
    store.set(userKey, user)
  },
  getUser() {
    return store.get(userKey) || {}
  },
  removeUser() {
    store.remove(userKey)
  },
}