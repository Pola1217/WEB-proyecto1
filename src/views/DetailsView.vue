<template>
    <div class="product">

      <img class="product__image" :src="currentProduct.image" alt="preview">

      <div class="product__info">
        <p class="algo">Id del producto: {{ $route.params.productId }}</p>
        <p>Nombre Producto: {{ currentProduct.name }}</p>
        <p>color del producto: {{ currentProduct.description }}</p>
        <p>precio del producto: {{ currentProduct.price }}</p>
      </div>
      
    </div>
  </template>

  <script>

  import { mapStores } from "pinia";
  import { useProductsStore } from "../stores/products";
  
  export default {
    data() {
      return { currentProduct: {} };
    },
    computed: {
      ...mapStores(useProductsStore),
    },
    mounted() {
      this.currentProduct = this.productsStore.getProductById(
        this.$route.params.productId
      );
    },
  };
  </script>

  <style>

    .product{
        padding-top: 10%;
        padding-left: 10%;
        display: flex;
        align-items: center;
           
    }

    .product__image{
        width:100%;
        height: 700px;
        object-fit: contain;
    }

    .product__info{
        width: 100%;
        margin-left: 10%;
        font-family: 'RalewayLight';
        font-size: 1.50em;
        color: black;
    }

  </style>