<template>

<Carousel :autoplay="3000" :wrap-around="true">
        <slide v-for="slide in slides" :key="slide">
            <img :src="slide.banner" class="banner">
            <div class="info">
                <h3 class="info__text">{{slide.text}}</h3>
                <router-link to="/shopAll">
                    <button class="info__button">{{slide.go}}</button>
                </router-link>
                
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
                go: 'Go to shop'
            },
            {
                banner: '/promo2.png',
                text: 'Woke and wise, this is the essential midnight oil rose.',
                go: 'Go to shop'
            },
            {
                banner: '/promo3.png',
                text: 'This one is for the early risers. Dont miss the opportunity',
                go: 'Go to shop'
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

    position:inherit;
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
            margin-right: 45%;
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

@media (max-width:600px) {

.banner{
    position:relative;
    margin-top: 16%;
    width: 100%;
}
.info{
    &__text{
        font-size: 1em;
        margin: 10px 0;
}

&__button{
    height: 30px;
    font-size: 0.5em;
}
}
   
}

</style>>



