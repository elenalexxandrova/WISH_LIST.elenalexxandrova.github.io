<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { CREATING_MODE_ROUTE_NAMES } from '../../../../shared/router/routes';

const router = useRouter()
const route = useRoute()

const activePage = ref<string>()

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
    
</template>