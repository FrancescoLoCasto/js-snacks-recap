/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        guestList: [],
        i: 1,
        userInputGuest: "",
      }

    },

    methods: {
      getNameGuest(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/name")
        .then((response) => {
          this.guestList.push(response.data.response)
        })
      },

      check(){
        if (this.guestList.includes(this.userInputGuest)){
          return true
        } else {
          return false
        }
      }
    },


    created(){
      while(this.i <= 10){
        this.getNameGuest()
      }
    }


    
  }).mount('#app')