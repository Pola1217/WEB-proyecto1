<template>
    <div class="product" >

      <img :src="currentProduct.image" alt="preview" class="product__pic">

      <div class="product__info">
        <p class="product__info__name"> {{currentProduct.name}}</p>

        <star-rating 
        class="product__info__star"
        v-model:rating="rating"
        :star-size="20"
        :rating="currentProduct.rating"
        @click="rateProduct">
      </star-rating>   


        <p class="product__info__desc" > {{currentProduct.description}}</p>
        <p class="product__info__price"> {{formatPrice (currentProduct.price)}}</p>  
        <button class="product__info__btn"  @click="addToCart">Add to cart</button>

      </div>
      
    </div>

    <Footers/>
  </template>

  <script>
  import StarRating from 'vue-star-rating'
  import { mapStores } from "pinia";
  import Footers from '../components/footer.vue'
  import { useProductsStore } from "../stores/products";
  import { useFirestoreStore } from "../stores/firestore";
  import { useAuthenticationStore } from '../stores/authentication'
  
  export default {
    data() {
      return { 
        currentProduct: {} ,
        rating: null,
        userRating: null,
      };
    },

    components: {
    StarRating,
    Footers
    },

    computed: {

      ...mapStores( useProductsStore, useFirestoreStore, useAuthenticationStore),

      getUser(){
                return this.authenticationStore.user
        },
    
    },


    async mounted() {

      this.currentProduct = await this.firestoreStore.getIndiProduct(
        this.$route.params.productId
        );
    
    },

    methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

    addToCart(){
        this.productsStore.addProductToCart(this.getUser, this.currentProduct);
    },

    async rateProduct() {
      if (this.authenticationStore.getUser() !== null) {

        //User info
        let uid = this.authenticationStore.getUser().uid;
        let user = await this.firestoreStore.getUser(uid);

        //Check if user has rated 
        if (!user.rating || !user.rating.includes(this.currentProduct.id) && this.rating !== null) {

          //Adds books rated by user to list, to avoid voting more than once
          this.firestoreStore.addUserRatingList(uid, this.userRatings(user));

          //Add rating to book
          this.firestoreStore.addProductRatingList(this.currentProduct.id, this.productRating(this.currentProduct));
        } else {
          alert("You've already voted!");

        }
      } else {

        alert("Please sign in before voting");
      }
      //Change book rating
      this.changeRating(this.currentProduct);
    },

    userRatings(user) {
      let userRatingArray;

      if (user.rating === null || user.rating === undefined) {
        userRatingArray = [this.currentProduct.id];

      } else if (user.rating.length > 0) {

        userRatingArray = [...user.rating, this.currentProduct.id];
      }
      return userRatingArray;
    },

    productRating(product) {

      let RatingArray;

      if (product.ratingList == null || product.ratingList == undefined) {
        RatingArray = [this.rating];
      } else if (product.ratingList.length > 0) {
        RatingArray = [...product.ratingList, this.rating];
      }
      return RatingArray;
    },

    changeRating(product) {

      const average = product.ratingList.reduce((a, b) => a + b, 0) / product.ratingList.length;
      this.firestoreStore.updateRating(this.currentProduct.id, average);
    }

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
        border-radius: 20%;
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