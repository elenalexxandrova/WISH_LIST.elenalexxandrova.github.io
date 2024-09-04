<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { CREATING_MODE_ROUTE_NAMES } from '../../../../shared/router/routes';

const router = useRouter()
const route = useRoute()

const activePage = ref<string>()

function handleGoTo(name: string) {
  activePage.value = name
  router.push({ name })
}

function defineActivePage() {
    if (route.path.includes('for-you-page'))
        activePage.value = CREATING_MODE_ROUTE_NAMES.FYP
    if (route.path.includes('user-page'))
        activePage.value = CREATING_MODE_ROUTE_NAMES.USER_PAGE
}

onMounted(() => {
    defineActivePage()
})

</script>

<template>
    <ElMenu
      :default-active="activePage"
      class="flex !h-screen flex-col"
      @select="handleGoTo"
    >
      <h2 class="flex h-[70px] w-[240px] items-center gap-2.5 p-5 text-[22px]/[30px] font-medium text-slate-950">
        <p>Creating mode</p>
      </h2>
      <ElMenuItem
        :index="CREATING_MODE_ROUTE_NAMES.FYP"
        class="text-[14px]/[22px] text-slate-800"
      >
        Wish ideas for you
      </ElMenuItem>
      <ElMenuItem
        :index="CREATING_MODE_ROUTE_NAMES.USER_PAGE"
        class="text-[14px]/[22px]"
      >
        Профиль
      </ElMenuItem>

      <div>
        <ElDivider />
        </div>
    </ElMenu>
  </template>
  
  <style lang="scss" scoped>
  .el-menu {
    border-right: 0px;
  }
  
  .el-divider--horizontal {
    margin: 0px 0;
  }
  </style>
  