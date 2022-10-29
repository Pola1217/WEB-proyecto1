import { defineStore } from "pinia";
import { db , storage} from "../firebase/config"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

export const useCartStore = defineStore("cart", {
    
    state: () => ({
        id: null,
        cartData: null,
        products: [],
        firebaseProducts: [],
        shoppingCart: [],
        localStorageProducts: [],
        
    }),

    getters: {
        getProducts: (state) => [...state.products],
        getShoppingCart: (state) => [...state.shoppingCart],
    },

    actions: {

        async defineDocs(){
            const querySnapshot = await getDocs(collection(db, "items"));
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
    
            const itemObject = {
                "id": doc.id,
                "image": doc.data().image,
                "Name": doc.data().productName,
                "Price": doc.data().productPrice,
                "Rating": doc.data().productRating,
                "Type": doc.data().productType,
                "Unit": doc.data().productUnit,
                "Quantity": doc.data().quantity
            }
    
            this.products.push(itemObject);
            });
    
          },
        async displayItem(){
    
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
    
          for(let j = 0; j < itemArr.length; j++){
    
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
    
      printId(){
        console.log(this.id)
      },

    },

async createFirebaseCart(db, userId, cart) {
    try {
        await setDoc(doc(db, "cart", userId), {
            cart
        });
    } catch (e) {
        console.log(e);
    }
},

async getFirebaseCart(db, userId) {
    const docRef = doc(db, "cart", userId);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    return (result) ? result.cart : [];

},

async createFirebaseOrder (db, userId, order) {
    try {
        await setDoc(doc(db, "order", userId), {
            order
        });
        console.log(db);
    } catch (e) {
        console.log(e);
    }
} ,  

async deleteCart(db, userId) {
    try {
        const docRef = doc(db, "cart", userId);
        await deleteDoc(docRef)
    } catch (error) {
        console.log(error);
    }
},

async addProductToCart(userId, objectInfo){

    console.log("SHOWING", userId, objectInfo.id);

    try{
        if(userId != null){
            await setDoc(doc(db, "users", userId, "cart", objectInfo.id), objectInfo);
            alert("Product added to cart");
        }
        else{
            alert("Please log in before adding products to cart");
        }
      }

      catch(error){
        console.log(error);
      }
  },

  async assingValuesToCart(data){
    this.cartData = data;
    this.shoppingCart.push(this.cartData);
  },

  async getCart(userId){
    this.shoppingCart = [];
    const querySnapshot = await getDocs(collection(db, "users", userId, "cart"));
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());

    this.assingValuesToCart(doc.data())

    });
  },

  async uploadPicture(file){
    const storage = getStorage();
    const storageRef = ref(storage, 'imgs')

    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded file');
    })
  },

})