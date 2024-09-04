<script setup lang="ts">
import { CREATING_MODE_ROUTE_NAMES } from '../../../shared/router/routes';
import { ARM_NAMES } from '../../../shared/ui/SelectArmPopover/config';
import { useRouter } from 'vue-router';

const router = useRouter()

function redirectToArm(armName: string) {
    if (armName === ARM_NAMES.CREATING_MODE)
        router.push({ name: CREATING_MODE_ROUTE_NAMES.MAIN})
}

redirectToArm(ARM_NAMES.CREATING_MODE)
</script>

<template>
    <RouterView/>
</template>