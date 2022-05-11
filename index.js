const socket = io('http://localhost:3000');

socket.on('receivedOption', (data) =>{
    console.log(data);
})

socket.on('alreadyChoosed', (data) => {
    console.log(data);
})

socket.on('result', (data) => {
    alert(data.result);
})

Array.from(document.getElementsByClassName("choice")).forEach(function(element){
    element.addEventListener("click", function(e){
        socket.emit('selectedOption', {option: e.srcElement.id})
    })
})
