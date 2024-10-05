<script setup lang="ts">
import WishItemCard from '../../../../shared/ui/WishItemCard/ui/WishItemCard.vue';
import type { WishItem } from '../../../../entities/wish-item/types';
import { ref } from 'vue';

const wish_items  = ref<WishItem[]>([
    {
        id: 1,
        name: 'NY City',
        price: 2000,
        img_src: 'https://i.pinimg.com/236x/5c/c1/80/5cc1805b0cddd6cdc46e7d7564912a04.jpg',
        creator: {
            id: 1,
            name: 'elenalexxandrova',
            avatar_src: 'https://i.pinimg.com/75x75_RS/d9/65/f1/d965f1ae6d78bdc52e2dd72aee94827f.jpg',
        },
        is_favorite: true,
        is_saved: true,
        boards: ['Travelling'],
    },
    {
        id: 2,
        img_src: 'https://i.pinimg.com/236x/1a/4b/fc/1a4bfcf05e3abf581eb297c135673122.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 3,
        img_src: 'https://i.pinimg.com/736x/10/70/dd/1070dd8c824129752ccc12fa6fe5ed76.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 4,
        img_src: 'https://i.pinimg.com/236x/7b/1a/f3/7b1af3274f786758d8c158f3cddd501d.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 5,
        img_src: 'https://i.pinimg.com/236x/c9/8b/e4/c98be437ab4e3b5011a64de2ce45a8d8.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 6,
        img_src: 'https://i.pinimg.com/236x/a9/15/9d/a9159daa12363f8ee8af12bef9ad624d.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 7,
        img_src: 'https://i.pinimg.com/236x/cb/0c/7a/cb0c7a2d80d0cf13ad319966f2118399.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 8,
        img_src: 'https://i.pinimg.com/236x/7f/95/5d/7f955d600361682969477c725abe0d6f.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 9,
        img_src: 'https://i.pinimg.com/236x/13/69/bf/1369bf53e631edd79937c8192a57f582.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 10,
        img_src: 'https://i.pinimg.com/236x/c8/0e/7e/c80e7e22cc7ef242ac52f020996b9c03.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 11,
        img_src: 'https://i.pinimg.com/474x/9d/c7/0b/9dc70b3ce9c87d8b28278ff690e3d315.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 12,
        img_src: 'https://i.pinimg.com/236x/12/59/70/125970626327050440d0d3288319033d.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 13,
        img_src: 'https://i.pinimg.com/474x/7b/bc/4f/7bbc4f0f2bbe7bb0f73af90076544b49.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 14,
        img_src: 'https://i.pinimg.com/236x/ae/88/cd/ae88cdfcfca29b5bee2522529c75d214.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 15,
        img_src: 'https://i.pinimg.com/236x/04/95/5f/04955f3317cd0ae66eb3b37814019b67.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 16,
        img_src: 'https://i.pinimg.com/474x/bc/74/36/bc74366aec40c00801292b2755730d28.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 17,
        img_src: 'https://i.pinimg.com/236x/8a/75/e0/8a75e09647557f1b121ddcb901a3c099.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 18,
        img_src: 'https://i.pinimg.com/474x/54/b8/3d/54b83dc5ae99697ee90a3700f6c82695.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 19,
        img_src: 'https://i.pinimg.com/736x/15/00/eb/1500eb19e70c49632bc3786a9075f333.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 20,
        img_src: 'https://i.pinimg.com/236x/3d/38/d3/3d38d30a0f219b658a24930d1dbe6791.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 21,
        img_src: 'https://i.pinimg.com/474x/36/5e/5a/365e5a102434f096b6f0b64cb9120c95.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 22,
        img_src: 'https://i.pinimg.com/236x/04/82/05/04820525e0bab37a5faaaa1efd6059ea.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 23,
        img_src: 'https://i.pinimg.com/474x/63/a0/ac/63a0acd11041b004d90300f6874300f0.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 24,
        img_src: 'https://i.pinimg.com/236x/d3/43/1b/d3431b4497ab8a047807edd7459b298f.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 25,
        img_src: 'https://i.pinimg.com/236x/1a/e0/28/1ae0281e8a7582f4f19c34e1cc69d5cb.jpg',
        is_favorite: true,
        is_saved: true,
    },
    {
        id: 26,
        img_src: 'https://i.pinimg.com/236x/fc/8f/83/fc8f83da84f9e0f6320e858054aa24a7.jpg',
        is_favorite: true,
        is_saved: true,
    },
        // {
    //     id: ,
    //     img_src: '',
    //     is_favorite: true,
    //     is_saved: true,
    // },
    
])

</script>
<template>
    <div>
        for you page
        <div class="masonry-grid">
            <!-- TODO заменить на tw + подогнать под компонент отдельной сущности -->
           <WishItemCard v-for="wish in wish_items" :key="wish.id" :wish_item="wish"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.masonry-grid {
  column-count: 6;
  column-gap: 16px;
  padding: 16px;
}

@media (max-width: 1200px) {
  .masonry-grid {
    column-count: 4;
  }
}

@media (max-width: 900px) {
  .masonry-grid {
    column-count: 3;
  }
}

@media (max-width: 600px) {
  .masonry-grid {
    column-count: 2;
  }
}

@media (max-width: 450px) {
  .masonry-grid {
    column-count: 1; 
  }
}
</style>