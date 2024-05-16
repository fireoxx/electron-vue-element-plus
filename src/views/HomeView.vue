<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-4-1">
            <router-link to="users">users</router-link>
          </el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
      </el-aside>
      <el-container>
        <!-- <el-header>Header</el-header> -->
        <el-main>
          <section class="app-main">
            <transition name="fade" mode="out-in">
              <!-- <router-view :key="key"></router-view> -->
              <router-view></router-view>
            </transition>
          </section>
        </el-main>
      </el-container>
      
    </el-container>
  </div>

</template>

<style>
  .app-wrapper {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
</style>