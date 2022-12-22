/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
differenziando i messaggi utente da quelli del computer. */

const { createApp } = Vue

  createApp({
    data() {
      return {
        messages: [],
        userSendMessage: '',
        activeIndex: 0,
      }

    },

    methods: {
      getNewMessage() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
        .then((response) => {
          let newCreationMess = {
            message: response.data.response,
            status: "received"
          }
          this.messages.push(newCreationMess)
        })
      }
    }

    
  }).mount('#app')