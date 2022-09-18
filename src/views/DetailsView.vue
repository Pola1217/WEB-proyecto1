<template>
    <div>
      <h1>Soy el detalle</h1>
      <img src="{{product.image}}" alt="preview">
      <p class="algo">Id del producto: {{ $route.params.productId }}</p>
      <p>Nombre Producto: {{ currentProduct.name }}</p>
      <p>color del producto: {{ currentProduct.description }}</p>
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
  </style>