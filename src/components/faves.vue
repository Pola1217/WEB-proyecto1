<template>
    <h4 class="title">Check Out Our Best Sellers</h4>


</template>

<script>
    import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default {
    data() {
        return {
          faves: [
            {
                name: '/banner1.png',
                price: 'The ultimate coffee crowd pleaser.',
                
            },
            {
                name: '/banner1.png',
                price: 'The ultimate coffee crowd pleaser.',
            },
            {
                name: '/banner1.png',
                price: 'The ultimate coffee crowd pleaser.',
            },
          ],
        }
      },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
};
</script>

<style lang="scss" scoped>

@font-face {
    font-family: Capuche;
    src: url('/Capuche Trial.otf');
}
    .title{
      font-family: 'Capuche'; 
      font-size: 2em;
      text-align: center;
      padding: 3%;
    }

</style>