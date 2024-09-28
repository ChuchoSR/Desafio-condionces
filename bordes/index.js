let img = document.getElementById('picture');
clik = false;

img.addEventListener('click', function () {
    clik = !clik;
    img.classList.add('border-img');
    clickONo();
})

    function clickONo () {
        switch(clik) {
            case true:
                    img.classList.remove('border-img');
                break;

            case false:
                    img.classList.add('border-img');
                break;
            default:
        }
    }

