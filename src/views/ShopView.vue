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
        <button class="shop__info__edit" id="shop__info__edit" v-if="admin" @click="openEdit($event, product)">
        EDIT
    </button>
      </div>


    </RouterLink>

  </div>

  <form class="form" v-if="edit" id="form">
    
    <h1 class="form__title">Edit Product</h1>

    <button class="form__close" @click="closeEdit">X</button>
    <input 
    placeholder='name' 
    v-model='name' 
    type='text' 
    name='Name' 
    id='Name'
    class='form__input'/>

    <select placeholder='category' name="category" id="category" class="form__input" v-model="category">
    <option hidden disabled selected value>Select a category</option>
    <option value="Coffee">Coffee</option>
    <option value="Tea">Tea</option>
    <option value="Accessories">Accessories</option>
    <option value="Kit">Kit</option>
    <option value="Single">Single Serve</option>
    </select>

    <textarea 
    placeholder='description' 
    v-model='description' 
    type='text' 
    name='Description' 
    id='Description'
    class='form__input'>
    </textarea>

    <input 
    placeholder='price' 
    v-model='price' 
    type='number' 
    name='Price' 
    id='Price'
    class='form__input'/>

    <star-rating
      v-bind:increment="0.5"
      v-model:rating="rating"
      inactive-color="#000"
      active-color="#F2BA42"
      :rounded-corners="true"
      :border-width="2"
      :star-size="40"
      class="form__input__star"
    ></star-rating>

    <input 
    placeholder='img' 
    type='file' 
    name='img' 
    id='newProduct'
    class='form__input'
    multiple
    @change="readImage"/>

    <button 
    type='submit' class='form__button' 
    @click="(e) => editProduct()"> Edit Product </button>

  </form>

  <Footers/>
</template>

<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";
import Footers from '../components/footer.vue'
import { useFirestoreStore } from "../stores/firestore";
 import {useAuthenticationStore, } from '../stores/authentication'


export default {

  data(){
    return{
      firebaseProducts: [],
      drawProducts: [],

      edit: false,
      selectProd: '',

      //edit info 
      name: '',
      category: '',
      description: '',
      price: '',
      rating: 0,
      reader: new FileReader(),
      imgURL: null
    };
  },


  components: {
    Footers,
  },

  computed: {
    ...mapStores(useProductsStore, useFirestoreStore, useAuthenticationStore),

    uid() {
      return this.authenticationStore.getUser().uid;
    },

    admin() {
      return this.authenticationStore.checkAdmin();
    },

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

    async editProduct() {

      const product = {

        id: this.selectProd.id,
        name: this.name,
        category: this.category,
        description: this.description,
        price: this.price,
        rating: this.rating,
        image: this.imgURL,

      }

      //firebase storage
      await this.firestoreStore.editProduct(this.selectProd.id, product);

      //Close edit
      this.edit = false;
      },

      async deleteBook() {
      await this.firestoreStore.deleteProduct(this.selectProd.id);

      //Close edit
      this.edit = false;
      },

      readImage(e) {
      this.reader.readAsDataURL(e.target.files[0]);
      this.reader.addEventListener("load", () => {
        this.imgURL = this.reader.result;
      });
      },

      openEdit(e, product) {
      e.preventDefault();

      this.edit = true;
      this.selectProd = product;

      },

      closeEdit() {
      this.edit = false;
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
     
     &__edit{
        font-family: 'RalewayLight';
        font-size: 0.95em;
        text-align: center;
        color: #000000;
        
        width: 50%;
        height: 15%;
        
        border: 2px solid #000000;
        background-color: #FFFFFF;
        box-sizing: border-box;
        border-radius: 5px;

        &:hover{
              background-color: #2c77b5;
              color: #ffffff;
          }
     }
      }

  }
    
  .form{
    position:relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 9%;
    flex-wrap: nowrap;
    align-items: center;

      &__title{
            align-items: center;
            font-family: 'RalewayLight';
            font-size: 1.50em;
            color: #000000;
      }

      &__input{
        font-family: 'RalewayLight';
        font-size: 0.95em;
        line-height: 21px;
        background: #FFFFFF;
        border: 2px solid #000000;
        box-sizing: border-box;
        width: 20%;
        height: 10%;
        margin-top: 25px;
        margin-bottom: 17px;
        padding: 10px;
        border-radius: 5px;

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