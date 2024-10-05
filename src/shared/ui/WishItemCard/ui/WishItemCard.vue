<script setup lang="ts">
import type { WishItem } from '../../../../entities/wish-item/types';

interface Props {
    wish_item: WishItem
}

const props = defineProps<Props>()

</script>

<template>
    <!-- вся карточка -->
    <div class="masonry-item-layout flex flex-col" >
        <!-- само фото -->
        <div class="masonry-img-layout relative overflow-hidden rounded-2xl">
            <img class="w-full h-full object-cover object-center rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105" :src="props.wish_item.img_src" loading="lazy" >
        </div>
        <!-- блок для названия, фото создателя, его имени-->
         <div class="flex flex-col gap-1">
            <p v-if="props.wish_item.name" class="mt-1.5 text-slate-600 text-sm">{{ props.wish_item.name }}</p>
            <p v-if="props.wish_item.price" class="text-slate-400 text-sm">{{ props.wish_item.price }} $</p>
            <div v-if="props.wish_item.creator" class="flex items-center space-x-1">
                 <!-- ава создателя -->
                 <img class="w-8 h-8 rounded-full shadow" :src="props.wish_item.creator?.avatar_src" loading="lazy" >
                 <!-- имя создателя -->
                 <p class="text-slate-600 font-semibold text-xs">
                    {{ props.wish_item.creator?.name }}
                 </p>
            </div>
         </div>
    </div>

</template>

<style scoped lang="scss">

.masonry-item-layout {
  position: relative;
  break-inside: avoid; 
  margin-bottom: 16px;
  display: block;
  overflow: hidden;
}

.masonry-item-layout:hover {
    width: 100.5%;
    height: 100.5%;
}

.masonry-img-layout:hover {
    transition: transform 0.5s, box-shadow 0.2s;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.175);
}

</style>