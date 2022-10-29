<template>
    <section class="cart-checkout">
      <!--CART-->
  
      
      <div class="CART">
      <h2 id="CART__title" class="CART__title">Cart</h2>
      <ul class="cart" id="cart">
      <RouterLink
        v-for="products in rederCart"
        :key="products.id"
        :to="`/detail/${products.id}`"
      >
        <img class="shop__pic" :src=products.image alt="preview">
        <div class="shop__info">
          <h4 class="shop__info__name">{{ products.name }}</h4>
          <p class="shop__info__price">{{ formatPrice(products.price)}}</p>
        </div>
      
      </RouterLink>
      </ul>
  
  
      <div id="total" class="total"></div>
      </div>
  
      <!--CHECKOUT-->
      
      <div class="CHECKOUT">
      
      <section class="checkout" id="checkout">
  
          <h2 id="checkout__title" class="checkout__title">Checkout</h2>
              <h2 class="checkout__subtitle">Shipping information</h2>
      
              <form class="checkout__Form" id="checkout__Form">
                  <input type="text" id="name" class="checkout__input" placeholder="Name">
      
                  <input type="text" id="address" class="checkout__input" placeholder="Address">
      
                  <input type="text" id="city" class="checkout__input" placeholder="City">
      
                  <input type="text" id="cellphone" class="checkout__input" placeholder="Cellphone number">
  
              <h2 class="checkout__subtitle">Shipping Selection</h2>
  
                  <select id="shipping" class="checkout__shipping">
                      <option hidden disabled selected value>Select an option </option>
                      <option value="standard">Standard (3 - 7 Buisness Days)</option>
                      <option value="premium">Premium (2 Buisness Days)</option>
                  </select>
  
                  <p class="shipping__price" id="shipping__price"></p>
      
              <h2 class="checkout__subtitle">Payment information</h2>
                  <input type="number" id="card" class="checkout__input" placeholder="Card number">
  
                      <div class="checkout__Form__row">
  
                          <input type="date" id="expiration" class="checkout__Form__row__date" placeholder="expiration">
                          <input type="text" id="code" class="checkout__Form__row__code" placeholder="Security code">
  
                      </div>
      
                  <input type="submit" value="BUY NOW" class="checkout__submit">
  
              </form>
          </section>
          </div>
      </section>
  
  </template>

<script>


import { useAuthenticationStore } from '../stores/authentication'
import { useFirestoreStore } from "../stores/firestore.js";
import {useProductsStore} from "../stores/products.js"
import { mapStores } from "pinia";
import { auth } from "../firebase/config"

export default {

    data() {
      return { 
        
      };
    },

    computed: {
            ...mapStores(useProductsStore, useAuthenticationStore),

            rederCart(){
                return this.productsStore.getShoppingcart;
            },
            
            getUser(){
                return this.authenticationStore.user
            },
            
            getCartData(){
                return this.productsStore.cartData
            }, 
        },

        data(){
            return {current: {}}
        },

        mounted(){
            this.productsStore.getCart(this.getUser)
        },


}
</script>

<style lang="scss">

$font-color: #000000;
$main-font: 'Raleway';
$sub-font: 'RalewayLight';

@mixin titles {
    font-family: $main-font;
    color: $font-color;
    font-size: 2em;
    padding-top: 7%;
    margin-left: 5%;
}
@mixin subtitles {
    font-family: $main-font;
    color: $font-color;
    padding-top: 2%;
    font-size: 1.2em;
    margin-left: 50px;
}


@mixin inputs {
    font-family:  $sub-font;
    font-size: 0.95em;
    line-height: 21px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    width: 100%;
    height: 20%;
    margin-bottom: 17px;
    padding: 10px;
    border-radius: 5px;
    margin-top: 25px;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

ul{
    list-style: none;
}

.flex{
    display: flex;
}

.align_items_center{
    align-items: center;    
}

.cart-checkout{
    display: flex;
    margin-top: 1%;
}

.CART{
    width: 44%;
    margin-left: 40px;

    
    &__title{
        @include titles();
        margin-top: 5%;
        margin-bottom: 2%;
    }
}

.total{
    border-top: 2px solid #000000;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 10%;
    padding-left: 55%;
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: 'SuisseMono';
}

.product{
    width: 100%;
    padding-left: 5%;
    padding-bottom: 2%;
    display:flex;
    align-items: center;

    &__image {
        width:100%;
        height: 300px;
        object-fit: contain;
    }

    &__name{
        width: 100%;
        margin-left: 5%;
        font-family: $sub-font;
        font-size: 0.90em;
        color: $font-color;
    }

    &__price{
        width: 100%;
        margin-top: 10%;
        margin-left: 10%;
        font-family: $main-font;
        font-size: 1.20em;
        color: $font-color;
    }

    &__delete{
        width: 50%;
        height: 30%;  
        padding: 5px;
        font-family: $main-font;
        background: none;
        font-size: 0.90em;
        color:#0d32a2;
        border: none;

        &:hover{
           color: #050064;
        }
    }
}

.checkout{
    width: 80%;
    height: 100%;
    margin-left: 15%;
    border-left: 1px solid #adadad;

    &__title{
        @include titles();
        margin-top: 5%;
    }

    &__subtitle{
        @include subtitles();
    }

    &__Form{
        position: relative;
        padding-left: 5%;
        
        &__row{
            display: flex;
            align-items: center;
            gap: 2%;
            width: 100%;
    
            &__date{
                width: 10%;
                @include inputs();
            }
            
            &__code{
                width: 10%;
                @include inputs();
            }
    
        }
    }

    &__input{
        @include inputs();
    }
    
    &__shipping{
        @include inputs();
    }

    &__submit{
        width: 55%;
        height: 20%;
        padding: 15px;
        font-family: $main-font;
        color: rgb(255, 255, 255);
        font-size: 0.85em;
        background-color:#0d32a2;
        border: none;
        margin: 20px 0 0 125px;
   

        &:hover{
            background-color: #050064;
        }
    }

    
}

@media all and (max-width:414px) {

.CART{
    margin-left: 30px !important;
    
    &__title{
        margin-top: 30% !important;
        margin-right: 20% !important;
    }
}

.cart-checkout{
    margin-top: 0% !important;
    display: flex !important;
    flex-wrap: nowrap !important;
    flex-direction: column !important;
    align-content: stretch!important;
    justify-content: center !important;
    align-items: flex-start !important;
}

.total{
    width: 100% !important;

}

.product{
    width: 100% !important;
    padding-left: 5% !important;
    padding-bottom: 1% !important;
    display:flex !important;
    align-items: center !important;

    &__image {
        width:100% !important;
        height: 200px !important;
        object-fit: contain !important;
    }

    &__name{
        width: 100% !important;
        margin-left: 5% !important;
        font-family: 'SuisseBook' !important;
        font-size: 1.2em !important;
    
    }

    &__price{
        width: 100% !important;
        margin-top: 10% !important;
        margin-left: 10% !important;
        font-family: 'SuisseMono' !important;
        font-size: 0.90em !important;
    }

    &__delete{ 
        padding: 15% !important;
        
    }
}

.checkout{
    width: 90% !important;
    margin-left: 0% !important;
    border: none !important;

    &__title{
        margin-top: 5%;
    }

    &__submit{
        margin: 20px 20px 0 70px !important;
        &:hover{
            background-color: #050064 !important;
        }
    }

    
}    
}

</style>