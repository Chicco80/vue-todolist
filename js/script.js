
const toodolist = new Vue({
    el: '#lista',
    data: {
        tiramisu: [
            {
                check: false,
                nomeIngrediente: 'zucchero',
                icon:'fa-solid fa-cubes-stacked'
              
            },
            {
                check: false,
                nomeIngrediente: 'mascarpone',
                icon:'fa-solid fa-cheese'
               
            },
            {
                check: false,
                nomeIngrediente: 'caffe',
                icon:'fa-solid fa-mug-saucer'
               
            },
            {
                check: false,
                nomeIngrediente: 'tuorlo',
                icon:'fa-solid fa-egg'
                
            },
            {
                check: false,
                nomeIngrediente: 'savoiardi',
                icon:'fa-solid fa-cookie'
                 
            },
            {
                check: false,
                nomeIngrediente: 'cacao',
                icon:'fa-solid fa-cubes-stacked'
               
            },
            {
                check: false,
                nomeIngrediente: 'marsala',
                icon:'fa-solid fa-bottle-droplet'
                
            },
        ],
        nuovoIngrediente: '',  
    },
    methods: {
        aggiungi() {
            const ingrediente = {
                check: false,
                nomeIngrediente: this.nuovoIngrediente,
            }
            this.tiramisu.push(ingrediente);
            this.nuovoIngrediente = "";
        },
        rimuovi(i) {
           this.tiramisu.splice(i, 1) 
        }
    },
})  