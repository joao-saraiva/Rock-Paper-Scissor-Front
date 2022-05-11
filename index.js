const socket = io('http://localhost:3000');
$('.versus-section').hide();

socket.on('receivedOption', (data) =>{
    console.log(data);
})

socket.on('alreadyChoosed', (data) => {
    console.log(data);
})

socket.on('result', (data) => {
    alert(data.result);
})

$('.choice').on('click', function() {
    socket.emit('selectedOption', {option: $(this).attr('id')});
    $('.current-player-pick').append(`<img src="icon-${$(this).attr('id')}.svg" alt="rock" class="choice text-center" id="${$(this).attr('id')}">`)
    $('.buttons-section').hide();
    $('.versus-section').show();
})
