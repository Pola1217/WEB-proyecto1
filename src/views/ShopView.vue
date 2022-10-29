<template>

  <div class="top">

    <h1 class="top__title">SHOP ALL</h1>

    <section class="top__filters">
      
    <label for="category">Categories</label>
       <select name="category" id="category" @change="filterBy($event,'type')">
       
           <option value=" ">All</option>
           <option value="0">Coffee</option>
           <option value="1">Tea</option>
           <option value="2">Accesories</option>
           <option value="3">Kits</option>
           <option value="4">Single Serve</option>
       </select>

    <label for="price">Prices</label>
       <select name="price" id="price" @change="filterBy($event,'cost')">

      <option value="">Price</option>
      <option value="0">$20 or less</option>
      <option value="1">$30 or less</option>
      <option value="2">$50 or less</option>
      <option value="3">$50 +</option>
    </select>

     <label for="rating">Rating</label>
       <select name="rating" id="rating" @change="filterBy($event,'rating')">
      <option value="">Rating</option>
      <option value="0">1</option>
      <option value="1">2</option>
      <option value="2">3</option>
      <option value="3">4</option>
      <option value="4">5</option>
    </select>
   
       <label for="order">Order&nbsp;from</label>
       <select name="order" id="order" @change="sortBy($event)">

           <option value=" ">Select an option</option>
           <option value="0">A -> Z</option>
           <option value="1">Z -> A</option>
           <option value="2">Price: low to high</option>
           <option value="3">Price: high to low</option>
       </select>

    </section>

    </div>

  <div class="shop">
    <RouterLink
      v-for="product in drawProducts"
      :key="product.id"
      :to="`/detail/${product.id}`"
    >
      <img class="shop__pic" :src=product.image alt="preview">
      <div class="shop__info">
        <h4 class="shop__info__name">{{ product.name }}</h4>
        <p class="shop__info__price">{{ formatPrice(product.price)}}</p>
      </div>
    
    </RouterLink>
  </div>
  <Footers/>
</template>

<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";
import Footers from '../components/footer.vue'
import { useFirestoreStore } from "../stores/firestore";


export default {

  data(){
    return{
      firebaseProducts: [],
      drawProducts: [],
    };
  },


  components: {
    Footers,
  },

  computed: {
    ...mapStores(useProductsStore, useFirestoreStore),


  },

 
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

    sortBy(event) {
      let selection = event.target.value;
      this.productsStore.sortProducts(selection);
    },

    filterBy(event, caller) {
      let selected = event.target.value;
      this.productsStore.filter(selected, caller);
    },

},

  async mounted() {

  this.drawProducts = await this.firestoreStore.getProducts();
  
  },
  
};

</script>

<style lang="scss">

@mixin filter {
    font-size: 0.95em;
    line-height: 21px;
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    width: 150px;
    height: 3%;
    padding: 5px;
    border-radius: 5px;
}

.top{

    display: flex;
    flex-direction: column;
    margin-top: 6%;
    align-items: center;


  &__title{
        align-items: center;
        font-family: 'Capuche';
        font-size: 3em;
        color: #000000;
        padding-bottom: 2%;
  }

  &__filters {
    font-family: 'RalewayLight';
    font-size: 0.95em;
    display: flex;
    flex-direction: row;
    margin-right: 45px;
    align-items: center;
}

#searchBar{
  @include filter();
  margin-right: 2%
}

  #category {
      @include filter();
      margin-right: 2%
  }

  #order{
      @include filter();
  }

  #price{
      @include filter();
      margin-right: 2%
  }

  #rating{
      @include filter();
      margin-right: 2%
  }
}

  .shop{
    display: grid;
    grid-template-columns: repeat(5, 100px);
    padding: 5%;
    column-gap: 14%;
    row-gap: 3%;
    
     &__pic{
      width: 200px;
      height: 220px;
      border-radius: 9%;
      padding-bottom: 9%;
       

      &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 50, 166, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
     }

     &__info{
      height: 50%;

      &__name{
      font-family: 'Raleway';
      font-size: 1em;
      
     }

     &__price{
      font-family: 'Raleway';
      padding-top: 5%;
      font-size: 0.9em;
      color: rgb(4, 4, 83);
     }
     
      }
      }
    
  


@media (max-width:600px) {

  @mixin filter {
        width: 20%!important;
        margin-top: 30%!important;
        margin-bottom: 0% !important;
        padding: 0% !important;
    }

  .top{
    margin-top: 20%;
    
  &__title{
       font-size: 1em;
  }

  &__filters {
    flex-direction: column;
    margin-left: 50px;
}
}

 .shop{
  align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 100px);
    column-gap: 9%;
    row-gap: 3%;
    justify-content: space-evenly;

    &__pic{
      width: 100px;
      height: 115px;
    }

    &__info{

      &__name{
      width: 50%;
      font-size: 0.6em;
     }

     &__price{
      font-size: 0.5em;
      padding-bottom: 5%;
     }

    }
  }
}


</style>