import { defineStore } from "pinia";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
///// OPTIONS STORE

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        user: null,
        userLogged: null,
        isAdmin: false,
    }),

    actions: {

        signIn(email, password) {
            console.log('llamando sign in')
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
                    alert('usuario creado', user);
                })
                .catch((error) => {
                    const errorCode = error.code;
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
            }).catch((error) => {
              alert(error);
            });
      },

      getUser() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.userLogged = user;
                
                //rina
                if (user.uid == "NxYWOCuyICeH1Cob38ZOqDFkNr33") {
                    this.isAdmin = true;
                    alert(this.isAdmin, "this is admin");
                }
            } else {
                console.log("No admin")
            }
        })
        return this.userLogged;
        },
    
        checkAdmin() {
            return this.isAdmin;
        }

  },

  });