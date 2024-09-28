let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let result = 0;
const reset = document.getElementById('reset')

const btn = document.getElementById('verificar');

btn.addEventListener('click', function() {
    result = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);


    console.log(result);
    if(result <= 10) {
        text = document.querySelector('h3');
        text1 = document.createTextNode(`Puedes seguir añadiendo stickers, llevas ${result}`);
        text.appendChild(text1);
        console.log(result);
    }else{
        text = document.querySelector('h3');
        text1 = document.createTextNode(`Has superado el limite de stickers`);
        text.appendChild(text1);
    }
    btn.disabled = true;
})

reset.addEventListener('click', function() {
    location.reload();
})


