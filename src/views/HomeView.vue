<template>
   
        <Carousel/>
        <Faves/>
        <div class="quote">
            <h4 class="quote__title">You are what you drink</h4>
            <h4 class="quote__subtitle">We make sure every cup of coffee 
                you enjoy from us has been sourced, made and delivered to 
                you in the most sustainable way possible.</h4>
        </div>


        <Footers/>


</template>

<script>

import Carousel from '../components/banner.vue'
import Faves from '../components/faves.vue'
import Footers from '../components/footer.vue'

export default {
    components: {
    Carousel,
    Faves,
    Footers
},
}
</script>

<style lang="scss" scoped>

@font-face {
    font-family: Aboreto;
    src: url('/Aboreto-Regular.ttf');
}
@font-face {
    font-family: Capuche;
    src: url('/Capuche Trial.otf');
}
@font-face {
    font-family: Raleway;
    src: url('/Raleway-Bold.ttf');
}    

@font-face {
    font-family: RalewayLight;
    src: url('/Raleway-Medium.ttf');
}  

.quote{
    text-align: center;
    
    &__title{
        font-family: 'Capuche'; 
        font-size: 2em;
        padding-top: 3%;
    }
    &__subtitle{
        width: 500px;
        font-family: 'RalewayLight'; 
        font-size: 1em;
        padding-top: 1%;
        display: inline-flex;
    }
}

</style>