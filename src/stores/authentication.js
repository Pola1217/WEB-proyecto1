import { defineStore } from "pinia";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        user: null,
        userLogged: null,
        isAdmin: false,
        auth:auth,
    }),

    actions: {

       signIn(email, password) {

            console.log('sign in')
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('usuario loggeado', user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },

        signUp(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
            
                    const user = userCredential.user;
                    console.log('usuario creado', user)

                    alert('user created :)');
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },

        async newUserAwait(email, password) {
            try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log('usuario creado', userCredential.user)
        } catch(error) {
            alert(errorMessage);
        }
        },

      logOut(){
          signOut(auth).then(() => {
              console.log('user loged out')
              alert('user loged out');
            }).catch((error) => {
              alert(error);
            });
      },

      getUser() {

       /* onAuthStateChanged(auth, (user) => {

            if (user) {
              const user = auth.currentUser;
              this.userId = user.uid;
            } else {
              console.log("User is not signed in");
            }
          });*/


        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                this.userLogged = user;
                
                //test
                if (user.uid == "sThswpzVLBWPGZx7XAS59EKhWYp2") {
                    this.isAdmin = true;
                    alert("this is admin",this.isAdmin);
                }
            } else {
                console.log("No admin")
            }
        })

        return this.userLogged;
        },
    
        checkAdmin() {

            return this.isAdmin;

            /*const docRef = doc(db, "users", this.userId);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                console.log("Document Data: ", docSnap.data());

                this.isAdmin = docSnap.data().isUserAdmin;
            }
            else{
                console.log("error no document auth");
            }*/
        },

        async deleteAccount() {
            const user = auth.currentUser;
            await deleteDoc(doc(db, "users", user.uid));
            console.log(user);

            deleteUser(user).then(() => {
                alert("User has been deleted");
                location.reload();

            }).catch((error) => {
                console.log(error);
            });
        }

  },

  });