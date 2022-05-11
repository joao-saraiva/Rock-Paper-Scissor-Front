const socket = io('http://localhost:3000');
var score = 0;

$('.versus-section').hide();

socket.on('receivedOption', (data) =>{
    if(data.id != socket.id){
        $('.enemy-pick').append(`<img src="icon-${data.option}.svg" alt="rock" class="choice text-center enemy-last-pick" id="${data.option}">`)
    }
})

socket.on('alreadyChoosed', (data) => {
    console.log(data);
})

socket.on('result', (data) => {
    if(data.result != 'draw'){
        if(data.winnerId == socket.id){
            console.log('You Win');
            score += 1;
        }else{
            console.log('You Lose');
        }
    }

    setTimeout(function(){
        $('.buttons-section').show();
        $('.versus-section').hide();
        $('.actual-score').text(score);
        $( ".enemy-last-pick" ).remove();
        $( ".player-last-pick" ).remove();
    }, 3000);
})

$('.select-choice').on('click', function() {
    socket.emit('selectedOption', {option: $(this).attr('id')});
    $('.current-player-pick').append(`<img src="icon-${$(this).attr('id')}.svg" alt="rock" class="choice text-center player-last-pick" id="${$(this).attr('id')}">`)
    $('.buttons-section').hide();
    $('.versus-section').show();
})

