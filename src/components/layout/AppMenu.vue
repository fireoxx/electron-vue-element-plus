<template>
  <div class="logo">
  </div>
  <div>
    <el-menu default-active="2"
      :collapse="props.isCollapse"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
      background-color="#ebf1f5"
      text-color="#606266"
      active-text-color="#2F74FF"
      class="menu"
      router
    >
      <template v-for="(first,index) in routes">
        <el-sub-menu :index="first.path" v-if="first.children" :key="index" >
          <template  v-if="first.children">
              <el-menu-item-group v-for="(second,sec_index) in first.children"  :key="sec_index"> 
                <el-menu-item :index="first.path+'/'+second.path">
                  <el-icon><component :is="second.meta && second.meta.icon ? second.meta.icon : 'Menu'"/></el-icon>              
                  {{ second.meta && second.meta.name ? second.meta.name : second.name }}
                </el-menu-item>
              </el-menu-item-group>
          </template>
          <template #title>
            <el-icon><component :is="first.meta && first.meta.icon ? first.meta.icon : 'Menu'"/></el-icon>
            <span>{{ first.meta && first.meta.name ? first.meta.name : first.name }}</span>
          </template>
        </el-sub-menu>
        <el-menu-item :index="first.path" v-if="!first.children"  :key="index">
          <el-icon><component :is="first.meta && first.meta.icon ? first.meta.icon : 'Menu'"/></el-icon>
          <span>{{ first.meta && first.meta.name ? first.meta.name : first.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { routes } from '@/router/index.js'
import { ref } from 'vue'

const props = defineProps(['isCollapse'])
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.logo{
  height:60px;
  background: #e1eaf4;
}
.menu{
  min-height: calc(100vh - 80px);
 
}
.menu .el-menu-item:hover {
    background-color:#FFFFFF80;
}
.menu .el-menu-item.is-active{
  background-color: #FFFFFF80!important;
  color: #2f74ff !important;
}
</style>