<template>

  <div class="shop">

    <h1 class="shop__title">shop all</h1>

    <section class="shop__filters">
      
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


  <div class="shop__item">
    <RouterLink
      v-for="product in allProducts"
      :key="product.name"
      :to="`/detail/${product.name}`"
    >
    <div class="shop__item__indi">
      <img class="shop__item__indi__pic" :src=product.image alt="preview">
      <h4 class="shop__item__indi__name">{{ product.name }}</h4>
      <p class="shop__item__indi__prince">{{ formatPrice(product.price)}}</p>
      <button class="shop__item__indi__btn">Add to cart</button>
    </div>
    
    </RouterLink>
  </div>
</div>
<Footers/>
</template>

<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products.js";
import Footers from '../components/footer.vue'


export default {

  data(){
    return{
    };
  },


  components: {
    Footers
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
  },

  },

  mounted() {
    this.productsStore.loadProducts();
    this.drawProducts = this.allProducts;
  },

  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

   /* search (term) {
      this.resetPosts()
      this.productsStore = this.productsStore.filter((product) => {
        return product.id.toLowerCase().includes(term.toLowerCase())
      })
    },

    resetPosts () {
      this.productsStore = []
    },*/

    sortBy(event) {
      let selection = event.target.value;
      this.productsStore.sortProducts(selection);
    },

    filterBy(event, caller) {
      let selected = event.target.value;
      this.productsStore.filter(selected, caller);
    },
  },
  
};
</script>

<style lang="scss">

@mixin filter {
    font-size: 0.95em;
    line-height: 21px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    width: 200px;
    height: 3%;
    padding: 5px;
    border-radius: 5px;
}

.shop{

    display: flex;
    flex-direction: column;
    margin-top: 6%;
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
      margin-right: 2%
  }

  #price{
      @include filter();
      margin-right: 2%
  }

  #rating{
      @include filter();
      margin-right: 2%
  }

  &__item{
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 5px;

    &__indi{
    margin-inline: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

     &__pic{
      width: 250px;
      height: 290px;
      border-radius: 9%;
      margin-top: 30px;

      &:hover{
        border: 2px solid #000225;
        }
     }

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

  @mixin filter {
        width: 20%!important;
        margin-top: 30%!important;
        margin-bottom: 0% !important;
        padding: 0% !important;
    }

  .shop{
    
    margin-top: 20%;
    

  &__title{
       font-size: 1.5em;
  }

  &__filters {
    flex-direction: column;
}

  &__item{
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 0px;

    &__indi{
      margin-inline: 10px;

      &__name{
      width: 50%;
      font-size: 1em;
     }

      &__pic{
      width: 100px;
      height: 115px;
      }
      &__btn{ 
        margin: 5%;
      }
    }
  }
}
}

</style>