<template>
    <div>
    <h2>Hola Soy ADD</h2>
    <h2>Mi ID es: {{$route.params.productId}}</h2>
  </div>
  </template>
  
  
  <script>
  export default {
  computed: {
        productId() {
            this.$route.params.productId
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>