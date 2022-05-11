

Array.from(document.getElementsByClassName("choice")).forEach(function(element){
    element.addEventListener("click", function(e){
        axios.post('http://localhost:3000/choices/new', {nome: e.srcElement.id})
            .then(response => console.log(response.data))
                .catch(err => console.log(err))
    })
})

const sendChoice = document.getElementById('send-choice');

sendChoice.addEventListener("click", function(){
    axios.post('http://localhost:3000/rounds', {nome: "teste"})
            .then(response => console.log(response.data))
                .catch(err => console.log(err))
})