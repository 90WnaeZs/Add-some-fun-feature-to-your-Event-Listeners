$('#first').on('click',() => {console.log("Yeah, you clicked me' to the console when the user clicks on the button")});

$('#second').on('click', () => {$('#first').text("CHANGED")});

$('#third').on('click', () => {$('button').css('background-color', 'yellow')});

let input_color=$('#color').val();

$('#third').on('click', () => {$('button').css('background-color', input_color)});

