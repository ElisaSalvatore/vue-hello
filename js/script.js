// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

//BONUS
// 1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// 2. Inserire un input, l’utente scrive il suo nome, 
    //salutate l’utente all’interno di uno span. Ciao + valore input.
// 3. Inventate e divertitevi

new Vue ({
    el: "#app",
    data: {
        message: 'Ciao! Questo è un messaggio stampato utilizzando i data di Vue.js.',
        image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: '',
    },
    
});