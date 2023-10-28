import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条  桌面化是否需要
import 'nprogress/nprogress.css'// Progress 进度条样式

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  store.commit('getAccessToken')
  console.log('getAccessToken：' + store.state.access_token)
  const token = store.state.access_token
  if (token) {
    if (to.name === 'login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      next()
    }
  } else {
    console.log('to.path' + to.path)
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ name: 'login' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
