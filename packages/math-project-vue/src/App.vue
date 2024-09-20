vue
<script setup lang="ts">
import { useDark } from '@/composable/useDark'
import { Person } from '@w4ng3/tools'
import dayjs from 'dayjs'
import TypeDemo from './components/TypeDemo.vue'
import ZhihuHot from './components/ZhihuHot.vue'

const p = new Person('Junmping', 'math')

// 使用 useDark
const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

// 应用保存的主题
applySavedTheme()

// 切换主题的函数
const toggleTheme = () => {
  if (document.documentElement.classList.contains('dark')) {
    disableDarkMode()
  }
  else {
    enableDarkMode()
  }
}
</script>

<template>
  <section class="grid grid-cols-3 w-800px items-center gap-2 rounded-md bg-yellow">
    <div class="h-10 place-content-center bg-pink">
      1
    </div>
    <div class="bg-sky">
      2
    </div>
    <div>3</div>
    <div>4</div>
    <div class="i-carbon-3d-ica" />
  </section>
  <div>
    <div>当前时间{{ dayjs().format('YYYY年MM月DD日 HH:mm:ss') }}</div>
    <div>{{ p.name }} : {{ p.slogan }}</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <TypeDemo />
    <button class="btn" @click="toggleTheme">
      切换暗黑模式
    </button>
  </div>
  <ZhihuHot />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.btn {
  padding: 10px 20px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: rgba(255, 0, 0, 0.1); /* 悬停时的背景色 */
}


/* 为整个页面的背景色设置 */
body.dark {
  background-color: black; /* 确保 body 的背景色也为黑色 */
  color: white; /* 确保文字颜色为白色 */
}
</style>
