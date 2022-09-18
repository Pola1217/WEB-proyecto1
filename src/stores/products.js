import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],
        localStorageProducts: []
    }),

    getters: {
        getProducts: (state) => [...state.products],
    },

    actions: {
        newProduct(product) {
            this.localStorageProducts.push(product);
           
            this.products.push(product);
            localStorageProducts.setItem('products', JSON.stringify(this.localStorage));
        },

        loadProducts() {
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'));
            this.products = this.products.concat([...this.localStorageProducts]);
        }
    }
});