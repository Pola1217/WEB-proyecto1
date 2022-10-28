import { defineStore } from "pinia";
import { db , storage} from "../firebase/config"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

export const useCartStore = defineStore("cart", {
    
    state: () => ({
        db: db,
        storage: storage
    }),

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

}