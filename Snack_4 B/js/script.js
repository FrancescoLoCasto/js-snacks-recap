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
      
    }


    
  }).mount('#app')