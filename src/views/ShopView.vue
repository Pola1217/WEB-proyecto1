<template>

  <div class="shop">

    <h1 class="shop__title">shop all</h1>

    <section class="shop__filters">

      <label for="search">Search</label>
      <input type="text" v-model="buscar" id="searchBar" placeholder="Search By Name"/>
   
   <label for="category">Categories</label>
       <select name="category" id="category">
           <option value="">All</option>
           <option value="kits">Coffee</option>
           <option value="refils">Tea</option>
           <option value="cleanse">Kits</option>
           <option value="care">Accesories</option>
       </select>
   
       <label for="order">Order&nbsp;from</label>
       <select name="order" id="order">
           <option value="">Select an option</option>
           <option value="asc">Price: high to low</option>
           <option value="desc">Price: low to high</option>
           <option value="AtoZ">A -> Z</option>
           <option value="ZtoA">Z -> A</option>
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
import { useProductsStore } from "../stores/products";
import Footers from '../components/footer.vue'

export default {

  data(){
    return{
      buscar: ''
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
  },

  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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