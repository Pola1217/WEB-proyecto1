<template>
    <div class="product">

      <img :src=currentProduct.image alt="preview" class="product__pic">

      <div class="product__info">
        <p class="product__info__name"> {{$route.params.productId}}</p>

        <star-rating 
        class="product__info__star"
        :star-size="20"
        :rating="this.currentProduct.rating"></star-rating>    

        <p class="product__info__desc" > {{ currentProduct.description }}</p>
        <p class="product__info__price"> {{  formatPrice (currentProduct.price) }}</p>  
        <button class="product__info__btn">Add to cart</button>

        
      </div>
      
    </div>

    <Footers/>
  </template>

  <script>
  import StarRating from 'vue-star-rating'
  import { mapStores } from "pinia";
  import Footers from '../components/footer.vue'
  import { useProductsStore } from "../stores/products";
  
  export default {
    data() {
      return { currentProduct: {} };
    },

    components: {
    StarRating,
    Footers

  },

    computed: {
      ...mapStores(useProductsStore),
    },

    mounted() {
    this.currentProduct = this.productsStore.getProductsById(
        this.$route.params.productId
      );
    },

    methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

  },

  };
  </script>

  <style lang="scss">

    .product{
        padding-top: 8%;
        padding-left: 10%;
        display: flex;
        align-items: center;
           
        &__pic{
          width:100%;
        height: 500px;
        object-fit: contain;
        }
    }

    .product__info{
        width: 80%;
        margin-top: -17%;
        display: flex;
        flex-direction:column;
        align-items: flex-start;


        &__name{
          font-family: 'Raleway';
          font-size: 1.50em;
          color: black;
          padding: 4%;
        }

        &__desc{
          font-family: 'RalewayLight';
          font-size: 1em;
          color: black;
          padding: 4%;
        }

        &__price{
          font-family: 'Raleway';
          font-size: 1.1em;
          color: black;
          padding: 4%;
        }

        &__btn{
          width: 40%;
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
          margin-left: 20px;

          &:hover{
              background-color: #2c77b5;
              color: #ffffff;
          }
        }

        &__star{
          margin-left: 20px;
          
        }

    }

    @media (max-width:600px) {
    
      .product{
        margin-top: 15%;
        flex-direction: column;
        align-items: center;
        padding-left: 0% ;
      
        &__pic{
          position: relative;
        width:100%;
        height: 300px;
        }
    }

    .product__info{
      width: 50%;
      margin-top: 5%;
      position: inherit;


        &__name{
          font-size: 1.3em;
          
        }

        &__desc{
          font-size: 0.8em;
        }

        &__price{
          font-size: 1.1em;
        }

        &__btn{
          width: 100%;

          margin-left: 0px;

          &:hover{
              background-color: #2c77b5;
              color: #ffffff;
          }
        }

        &__star{
          margin-left: 5px;
          
        }

    }
  }
  </style>