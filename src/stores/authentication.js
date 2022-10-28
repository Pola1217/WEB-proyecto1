import { defineStore } from "pinia";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
///// OPTIONS STORE

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        //user: null,
        userLogged: null,
        isAdmin: false,
        auth:auth,
    }),

    actions: {

        async signIn(email, password) {
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password);
                console.log("Logged in");
                alert('logged in');
            } catch (error) {
                alert(error.message)
            }
        },

        async signUp(email, password) {
            try {
                const {user} = await createUserWithEmailAndPassword(auth, email, password);
                console.log('Signed up');
                return user;
            } catch (error) {
                alert(error.message);
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