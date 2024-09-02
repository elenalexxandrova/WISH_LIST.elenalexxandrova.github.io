import { createApp } from 'vue'
import './styles/tailwind/base.postcss'
import ElementPlus from 'element-plus'

import './styles/index.scss'
import 'element-plus/dist/index.css'


import App from './App.vue'
import './styles/tailwind/index.postcss'

export const app
= createApp(App)
.use(ElementPlus)
