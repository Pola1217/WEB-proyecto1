import { defineStore } from "pinia";
import { db, storage } from "../firebase/config"
import { addDoc, collection, doc, getDocs, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const useFirestoreStore = defineStore("firestore", {
    state: () => ({
        db: db,
        storage: storage
    }),

    actions: {

        async addProduct(product) {
            try {

                await setDoc(doc(db, "products", product.id), {
                   ...product
                  });
                  
               /* await addDoc(collection(db, "products"), product);*/
                alert("Product added! :)");
            } catch (error) {
                console.log(error);
            }
        },

        async getProducts() {
            const docRef = collection(db, "products");
            try {
                const { docs } = await getDocs(docRef);
                const products = docs.map((doc) => {

                    return {
                        ...doc.data(),
                    };

                });

                return products;

            } catch (error) {
                console.log(error);
            }

            console.log(products);
        },

        async getIndiProduct(id) {
            const docRef = doc(db, "products", id);
            try {

                const docSnap = await getDoc(docRef);
                const data = docSnap.data();

                return data;

            } catch (error) {
                console.log(error);
            }
        }
    }

});