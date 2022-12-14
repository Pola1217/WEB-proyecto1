import { defineStore } from "pinia";
import { db , storage} from "../firebase/config"
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

export const useFirestoreStore = defineStore("firestore", {
    state: () => ({
        db: db,
        storage: storage
    }),

    actions: {

        async addUser(userId, userInfo = {}) {
            try {
                await setDoc(doc(db, "users", userId), userInfo, {
                    ...userId
                });
                alert("User added! :)");
            } catch (e) {
                console.log(e)
            }
        },

        async addProduct(product) {
            try {

                await setDoc(doc(db, "products", product.id), {
                   ...product
                  });
                  
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

        async editProduct(id, product) {
            try {
                await setDoc(doc(db, "products", id), product);
                alert("Edit successful");
            } catch (error) {
                console.log(error);
            }
        },

        async deleteProduct(id) {
            try {
                await deleteDoc(doc(db, "products", id));
                alert("Deleted product successfully");
            } catch (error) {
                console.log(error);
            }
        } ,
    

        async getIndiProduct(id) {
            const docRef = doc(db, "products", id);
            try {

                const docSnap = await getDoc(docRef);
                const data = docSnap.data();

                return data;

            } catch (error) {
                console.log(error);
            }
        },

        async getUser(id) {
            const docRef = doc(db, "users", id);
            try {
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();
                return data;
            } catch (error) {
                console.log(error);
            }
        },

        addUserRating(id, ratingValue) {
            const userRef = doc(db, 'users', id);
            setDoc(userRef, { rating: ratingValue }, {merge: true});
        },

        addProductRating(id, ratingValue){
            const prodRef = doc(db, 'products', id);
            setDoc(prodRef, { ratingList: ratingValue }, {merge: true});
        },

        changeRating(product) {
            let sum = 0;
            let list = product.ratingList;
            list.push(product.rating);

            list.forEach(function(num) { sum += num });

            let average = sum/list.length;
            
            const producRef = doc(db, 'products', product.id);
            setDoc(producRef, { rating: average }, {merge: true});
        }
    }

});