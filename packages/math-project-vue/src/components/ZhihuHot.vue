vue
<script lang="ts" setup>
import type { ZhiHuHot, ZhiHuHotList } from '@/types/zh'
import { onMounted, ref } from 'vue'

const list = ref<ZhiHuHot[]>([])

const getData = async () => {
  const url = '/api/v3/feed/topstory/hot-lists/total'
  try {
    const response = await fetch(url, { mode: 'no-cors' })
    const res: ZhiHuHotList = await response.json()
    list.value = res.data
  }
  catch (error) {
    console.log('Request Failed', error)
  }
}

onMounted(() => {
  getData()
})

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`)
}
</script>

<template>
  <div class="w-[80vw] flex flex-col gap-2">
    <section v-for="(item, index) in list" :key="item.id" class="flex cursor-pointer items-center gap-2 rounded-lg bg-[#a992d5] p-3" @click="toggleHot(item.target.id)">
      <span>{{ index + 1 }}</span>
      <div class="flex-1">
        <h1 class="line-clamp-2 text-start text-lg">
          {{ item.target.title }}
        </h1>
        <p class="line-clamp-1">
          {{ item.target.excerpt }}
        </p>
        <div class="text-start">
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" alt="" class="ml-auto aspect-[4/3] w-[180px] rounded-md">
    </section>
  </div>
</template>

<style scoped>
.ellipsis_1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.ellipsis_2 {
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
<!-- 将原有的 CSS 样式转换为 Unocss 的类名，例如  flex ,  flex-col ,  gap-2 ,  w-[80vw] ,  bg-[#a992d5] ,
  p-3 ,  rounded-lg ,  text-lg ,  line-clamp-1 ,  line-clamp-2  等。 -->
