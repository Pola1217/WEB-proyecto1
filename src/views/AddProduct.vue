<template>
  <div class="form">
    
      <h1 class="form__title">Add Product</h1>

      <input 
      placeholder='name' 
      v-model='name' 
      type='text' 
      name='Name' 
      id='Name'
      class='form__input'/>

      <select placeholder='category' name="category" id="category" class="form__input" v-model="type">
      <option hidden disabled selected value>Select a category</option>
      <option value="coffee">Coffee</option>
      <option value="tea">Tea</option>
      <option value="accessories">Accessories</option>
      <option value="bundle">Bundle</option>
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
        v-bind:max-rating="5"
        v-model:rating="rating"
        inactive-color="#000"
        active-color="#f00"
        :rounded-corners="true"
        :border-width="2"
      ></star-rating>

      <input 
      placeholder='img' 
      type='file' 
      name='img' 
      id='img'
      class='form__input'
      multiple
      @change="readImage"/>

      <button 
      type='submit' class='form__button' 
      @click="(e) => createNewProduct()"> Add Product </button>
  
  </div>

<Footers/>

</template>

<script>
import { mapStores } from "pinia";
import StarRating from 'vue-star-rating'
import Footers from '../components/footer.vue'
import { useProductsStore } from "../stores/products.js";

export default {

  components: {
    Footers,
    StarRating,
  },

  data() {
    return {
      name: "",
      category: "",
      description: "",
      price: "",
      rating: 0,
      reader: new FileReader(),
      imgURL: null
    };
  },

  computed: {
    ...mapStores(useProductsStore),
    
  },

  methods: {
    createNewProduct() {
      const newProduct = {
        name: this.name,
        category: this.category,
        description: this.description,
        price: this.price,
        rating: this.rating,
        image: this.imgURL
      };

      this.productsStore.newProduct(newProduct);
      
      this.name = '';
      this.category = '';
      this.description = '';
      this.price = '';
      this.rating = '';

    },

    readImage(e) {
      this.reader.readAsDataURL(e.target.files[0]);
      this.reader.addEventListener("load", () => {
        this.imgURL = this.reader.result;
        console.log('added')
      });
    },

  }
}

</script>

<style lang="scss">

.form{
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    top: 15%;
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
    width: 50%;
    height: 20%;
    margin-top: 25px;
    margin-bottom: 17px;
    padding: 10px;
    border-radius: 5px;
  }
}

</style>