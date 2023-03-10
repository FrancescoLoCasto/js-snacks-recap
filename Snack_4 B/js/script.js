/** Chiedere all'utente quanti elementi vuole includere nell'array.
Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati. */

const { createApp } = Vue

  createApp({
    data() {
      return {
        userArrNumber: 0,
        numbers: [],
        tot : 0
      }

    },

    methods: {
      getNewNumers(){
        axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userNumber}`)
        .then((response) => {
          this.tot = 0
          this.numbers = response.data.response
          if (this.numbers.length == this.userArrNumber){
            for (let i = 0; i < this.numbers.length; i++){
              this.tot += parseInt((this.numbers[i]), 10);
            }
          }
        })
      }
    }


    
  }).mount('#app')