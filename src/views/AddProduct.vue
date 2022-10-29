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
      @click="(e) => createNewProduct()"> Add Product </button>
  
  </div>

</template>

<script>
import { mapStores } from "pinia";
import StarRating from 'vue-star-rating'
import { useProductsStore } from "../stores/products.js";
import { useFirestoreStore } from "../stores/firestore.js";

export default {

  components: {
    StarRating,
  },

  data() {
    return {
      name: '',
      category: '',
      description: '',
      price: '',
      rating: 0,
      reader: new FileReader(),
      imgURL: null
    };
  },

  computed: {
    ...mapStores(useFirestoreStore, useProductsStore),
    
  },

  methods: {

    async createNewProduct() {
     
      const idLowerCase = this.name.toLowerCase();
      const id = idLowerCase.replace(/\s+/g, "-");

      const newProduct = {
        id:id,
        name: this.name,
        category: this.category,
        description: this.description,
        price: this.price,
        rating: this.rating,
        image: this.imgURL,

      };

      //firebase storage
      await this.firestoreStore.addProduct(newProduct);

      //local
      //this.productsStore.newProduct(newProduct);
      
      this.name = '';
      this.description = '';
      this.price = '';

    },

    readImage(e) {
      this.reader.readAsDataURL(e.target.files[0]);
      this.reader.addEventListener("load", () => {
        this.imgURL = this.reader.result;
      });
    },

    

  }
}

</script>

<style lang="scss">

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
        font-family: 'Raleway';
        font-size: 1.80em;
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

    &__star{
      align-items: flex-end;
    }
  }

  &__button{
        font-family: 'RalewayLight';
        font-size: 0.95em;
        text-align: center;
        color: #000000;
        
        width: 20%;
        height: 15%;
        padding: 0.8%;
        margin-top: 25px;
        
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

@media (max-width:600px) {
  .form{
    margin-top: 28%;
  }

}

</style>