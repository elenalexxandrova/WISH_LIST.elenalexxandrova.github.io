<script setup lang="ts">
import CreatingModeNavigationMenu from './CreatingModeNavigationMenu.vue';


</script>

<template>
    <!--АРМ Режим создания-->
    <div class="flex h-screen w-screen">
        <!-- НАВИГАЦИОННОЕ МЕНЮ -->
         <CreatingModeNavigationMenu />
         <!-- ДОЧЕРНИЕ СТРАНИЦЫ -->
          <div class="h-screen flex-grow p-5">
            <RouterView/>
          </div>
    </div>
</template>