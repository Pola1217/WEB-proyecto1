<template>

  <div class="shop">
    <h1 class="shop__title">shop all</h1>

    <section class="shop__filters" id="filters">

      <div class="container">
    <div class="half">
      <Filters
        :search="search"
      />
    </div>
   
  </div>

    </section>

  <div class="shop__item">
    <RouterLink
      v-for="product in allProducts"
      :key="product.name"
      :to="`/detail/${product.name}`"
    >
    <div class="shop__item__indi">
      <img :src=product.image alt="preview">
      <h4 class="shop__item__indi__name">{{ product.name }}</h4>
      <p class="shop__item__indi__prince">{{ formatPrice(product.price)}}</p>
      <button class="shop__item__indi__btn">Add to cart</button>
    </div>
    
    </RouterLink>
  </div>
</div>s

</template>

<script>
import { mapStores } from "pinia";
import Filters from '../components/filters.vue'
import { useProductsStore } from "../stores/products";

export default {

  data(){
    return{
      str: '',
      type: ''
    };
  },

  name: 'App',
  components: {
    Filters,
    
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    }
  },

  mounted() {
    this.productsStore.loadProducts();
  },

  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },


    search (term) {
      this.allProducts().filter((product) => {
            return product.name.toLowerCase().includes(term.toLowerCase())
      }) 
    },

  }


};
</script>

<style lang="scss">

@mixin filter {
    font-size: 0.95em;
    line-height: 21px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    width: 100%;
    height: 3%;
    margin: 0% 2% 1% 0;
    padding: 5px;
    border-radius: 5px;
}

.shop{

    display: flex;
    flex-direction: column;
    margin-top: 8%;
    align-items: center;


  &__title{
        align-items: center;
        font-family: 'Aboreto';
        font-size: 2em;
        color: #000000;
        padding-bottom: 2%;
  }

  &__filters {
    font-family: 'RalewayLight';
    font-size: 0.95em;
    display: flex;
    flex-direction: row;
    padding-bottom: 3%;
    margin-left: 70%;
    align-items: center;
    
}

  #category {
      @include filter();
  }

  #order{
      @include filter();
  }

  &__item{
    display: flex;
    flex-direction: row;

    &__indi{
    margin-inline: 50px;
     display: flex;
     flex-direction: column;
     align-items: center;

     &__name{
      font-family: 'Raleway';
      font-size: 1.2em;
      padding: 3%;
     }

      &__btn{ 
        width: 50%;
        height: 40px;
        background: none;
        border: 2px solid #000225;
        border-radius: 5px;
        box-sizing: border-box;
        text-align: center;
        font-family: 'Raleway';
        letter-spacing: 0.2em;
        color: #000225;
        font-size: 0.6em;

        &:hover{
            background-color: #2c77b5;
            color: #ffffff;
        }
      }
      }
    }
  }


@media (max-width:600px) {
  .shop{
    flex-direction: row;
    margin-top: 8%;
    

  &__title{
        align-items: center;
        font-family: 'Aboreto';
        font-size: 2em;
        color: #000000;
        padding-bottom: 5%;
  }

  &__item{
    display: flex;
    flex-direction: row;

    &__indi{
      margin-inline: 50px;
    }
  }
}
}

</style>