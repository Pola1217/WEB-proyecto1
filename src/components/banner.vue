<template>

<Carousel :autoplay="3000" :wrap-around="true">
        <slide v-for="slide in slides" :key="slide">
            <img :src="slide.banner" class="banner">
            <div class="info">
                <h3 class="info__text">{{slide.text}}</h3>
                <button class="info__button">{{slide.go}}</button>
            </div>
        </slide>
</Carousel>

</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default {
    data() {
        return {
          slides: [
            {
                banner: '/promo1.png',
                text: 'The ultimate coffee crowd pleaser.',
                go: 'Get Info'
            },
            {
                banner: '/promo2.png',
                text: 'Woke and wise, this is the essential midnight oil rose.',
                go: 'Get Info'
            },
            {
                banner: '/promo3.png',
                text: 'This one is for the early risers.',
                go: 'Get Info'
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

.banner{
    position:relative;
    margin-top: 4%;
    width: 100%;
}

.info{
    transform: translateY(-50%);
        position: absolute;
        top: 55%;
        left: 5%;
        display: flex;
        flex-direction: column;

    &__text{
        width: 55%;
            margin: 20px 0;
            font-family: 'Aboreto';
            color: rgb(255, 255, 255);
            font-size: 4.2em;
            display: flex;
            align-items: center;
            text-align: center;
    }
    &__button{
            width: 20%;
            height: 50px;
            margin-left: 16%;
            background: none;
            border: 2px solid #ffffff;
            border-radius: 5px;
            box-sizing: border-box;
            text-align: center;
            font-family: 'Raleway';
            letter-spacing: 0.2em;
            color: rgb(255, 255, 255);
            font-size: 1em;
    }
    
}

</style>>



