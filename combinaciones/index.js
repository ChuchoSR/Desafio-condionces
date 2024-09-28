const verificar = document.getElementById('verificar');
const reset = document.getElementById('reset');
let text = document.querySelector('h2');


verificar.addEventListener('click', function() {
    let option1 = document.getElementById('select-column1').value;
    let option2 = document.getElementById('select-column2').value;
    let option3 = document.getElementById('select-column3').value;
    let result ;
    result = option1 + option2 +option3;
    console.log(result);
    console.log('click');

    if(result == 911) {
        text.innerHTML = 'Password 1 correcto.';
        console.log('se cumple la condicion');
    }else if(result == 714 ) {
        text.innerHTML = 'Password 2 correcto.';
        console.log('se cumple la condicion');
    }else {
        text.innerHTML = 'Password incorrecto, por favor intente de nuevo.';
    }

})

reset.addEventListener('click', function() {
    location.reload();
})