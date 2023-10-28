/**
 * 项目的环境配置
 */
// 这是vite的一种使用方式：https://cn.vitejs.dev/guide/env-and-mode.html#env-files
const env = import.meta.env.MDOE || 'dev'

const envConfig = {
    dev: {
        baseApi: 'http://localhost:8080',
    },
    test: {
        baseApi: 'test.example.com/api',
    },
    prod: {
        baseApi: 'example.com/api',
    }
}

export default {
    env,
    ...envConfig[env]
}
