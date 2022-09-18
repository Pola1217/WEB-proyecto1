<template>
    <h4 class="title">Check Out Our Best Sellers</h4>

    <Carousel :itemsToShow="2.95" :wrapAround="true">
    <Slide v-for="slide in faves" :key="slide">
      <div class="faves">
        <img :src="slide.pic" class="faves__pic">
        <h3 class="faves__text">{{slide.name}}</h3>
        <h3 class="faves__button">{{slide.price}}</h3>
     
      </div>
    </Slide>
  </Carousel>

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
                pic: '/best1.png',
                name: 'Can-Shaped Cup Set',
                price: '29.00',
                
            },
            {
                pic: '/best3.png',
                name: 'Original Family Blend',
                price: '29.00',
            },
            {
                pic: '/best2.png',
                name: 'Social Dog',
                price: '29.00',
            },
            {
                pic: '/best4.png',
                name: 'Match Bundle',
                price: '29.00',
            },
            {
                pic: '/best5.png',
                name: 'Variety Box',
                price: '29.00',
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


    .title{
      font-family: 'Capuche'; 
      font-size: 2em;
      text-align: center;
      padding: 3%;
    }

    .faves{
      padding: 5%;

      &__text{
        font-family: 'RalewayLight'; 
        padding: 1.5%;

      }
    }

  .carousel__slide > .faves {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .faves {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .faves {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .faves {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .faves {
  transform: scale(1.1);
}

</style>