import { defineStore } from "pinia";
import _, { map } from 'underscore';
import { db } from '../firebase/config';
import { doc, setDoc, getDocs, collection, updateDoc } from "firebase/firestore";

export const useProductsStore = defineStore("products", {
    state: () => ({
        id: null,
        cartData: null,
        products: [],
        shoppingCart: [],
        localStorageProducts: [],
        
    }),

    getters: {
        getProducts: (state) => [...state.products],
        getShoppingcart: (state) => [...state.shoppingCart],
    },

    actions: {

        async defineDocs(){
            const querySnapshot = await getDocs(collection(db, "items"));
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
    
            const productInfo= {
                "id": doc.id,
                "image": doc.data().image,
                "name": doc.data().productName,
                "rating": doc.data().productRating,
                "price": doc.data().productPrice,
                "category": doc.data().productCategory,
            }
    
            this.products.push(productInfo);
            this.localStorageProducts.push(productInfo);
            });
    
          },
    
        async renderProduct(){

            this.list = [];
            this.products = [];
            this.defineDocs();
      
            console.log(this.products);
          
            let itemValue;
            let object;
      
            let itemArr = [];
      
            for(let i = 0; i < localStorage.length; i++){
                itemValue = localStorage.getItem(localStorage.key(i));
                object = JSON.parse(itemValue);
      
                this.products.push(object);
            }
      
            for(let i = 0; i < itemArr.length; j++){
      
                this.item = itemArr[j];
                this.list.push(this.item);
            }
      
    
    },

    async uploadProduct(objectData){
        let objectId = String(Math.floor(Math.random() *(999999-100000)+100000));

        this.id = objectId;

        let newProduct = objectData;
        objectData.id = objectId;

        try{
            await setDoc(doc(db, "items", objectId), newProduct);
            alert("Product uploaded");
          }
    
          catch(error){
            console.log(error);
          }
  },

        async editProduct(objectData){
            let newProduct = objectData;
            this.id = objectData.id;

            try{
                await setDoc(doc(db, "items", this.id), newProduct);
                alert("Product edited succesfully, ratings have been reset");
            }

            catch(error){
                console.log(error);
            }
        },

        getProductsById(id) {
        const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.name.toLowerCase());
        return filteredProducts ? {...filteredProducts[0] } : null
        },


        async sortProducts(order) {

            switch (order) {
                case "0":
                    this.products = _.sortBy(this.products, "name");
                    break;
                case "1":
                    this.products = _.sortBy(this.products, "name").reverse();
                    break;
                case "2":
                    this.products = _.sortBy(this.products, "price");
                    break;
                case "3":
                    this.products = _.sortBy(this.products, "price").reverse();
                    break;
                 case "4":
                    this.products = _.sortBy(this.products, "category");
                    break;

            }
            },
        

        async filter (index, filterNumb) {

            if (filterNumb == 'type') {
               
                console.log(index);

                switch (index) {
  
                    case "0":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.category == "Coffee");
                        
                        break;
                    case "1":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.category == "Tea");
                        
                        break;
                    case "2":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.category == "Accessories");
                        
                        break;
                    case "3":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.category == "Kit");
                        
                        break;
                    case "4":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.category == "Single");
                        
                        break;
                    
                }
            };

            if (filterNumb == 'cost') {

                switch (index) {
                    case "0":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.price < 20);
                        break;
                    case "1":
                        this.renderProduct();
                        this.products = this.products.filter((product) =>  product.price < 30);
                        break;
                    case "2":
                        this.renderProduct();
                        this.products = this.products.filter((product) =>  product.price < 50);
                        break;
                    case "3":
                        this.renderProduct();
                        this.products = this.products.filter((product) =>  product.price > 50);
                        break;
                }
            };

            if (filterNumb == 'rating') {
               
                console.log(index);

                switch (index) {
  
                    case "0":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.rating == "1");
                        
                        break;
                    case "1":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.rating == "2");
                        
                        break;
                    case "2":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.rating == "3");
                        
                        break;
                    case "3":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.rating == "4");
                        
                        break;
                    case "4":
                        this.renderProduct();
                        this.products = this.products.filter((product) => product.rating == "5");
                        
                        break;
                    
                }
            };

            
        },

    async addProductToCart(user, productInfo){

        try{
            if(user != null){
                await setDoc(doc(db, "users", user.uid, "order", productInfo.id), productInfo);
                alert("Product added to cart");
            }
            else{
                alert("Please log in to add products to cart");
            }
          }
    
          catch(error){
            console.log(error);
          }
      },

      async cartValues(data){
        this.cartData = data;
        this.shoppingCart.push(this.cartData);
      },

      async getCart(user){

        console.log (user),

        this.shoppingCart = [];

        const querySnapshot = await getDocs(collection(db, "users", user, "order" ));

        querySnapshot.forEach((doc) => {

            //console.log(doc.id, " => ", doc.data());
            this.cartValues(doc.data())
    
        });
      },
    

    }

});

