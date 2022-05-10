axios.get('http://localhost:3000/teste')
    .then(response => console.log(response.data))
        .catch(err => console.log(err))
Array.from(document.getElementsByClassName("choice")).forEach(function(element){
    element.addEventListener("click", function(e){
        console.log(e.srcElement.id)
    })
})