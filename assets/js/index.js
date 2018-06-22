(function() {
    let words, categoryChoice, wordChoice, el, memory, charValue, erro = 0;

    words = {
        "ANIMAL": ["ELEFANTE", "CACHORRO", "GUAXINIM", "VACA"],
        "PROFISSÃO": ["PROFESSOR", "CARTEIRO", "DOUTOR", "ENGENHEIRO"]
    }
/*
    categoryChoice = Math.floor((Math.random()*Object.keys(words).length));
    wordChoice = Math.floor((Math.random()*4));

    document.querySelector('#category').innerHTML = Object.keys(words)[categoryChoice];

    Object.keys(words)[categoryChoice] === "ANIMAL" ? memory = words["ANIMAL"][wordChoice] : memory = words["PROFISSÃO"][wordChoice];
*/

    memory = "VACA";
    var teste = memory.replace(/./g,"_");
    document.querySelector('#word').innerHTML = teste;

    el = document.getElementsByClassName('btn');
    for(var x = 0; x <= el.length; x++) {
        el[x].addEventListener('click', function () {
            charValue = this.getAttribute('data-guide');

                for(var i = 0; i < memory.length; i++) {

                    if(memory.indexOf(charValue) >= 0) {
                        var pos = memory.indexOf(charValue);
                        for(var x = 0; x <= document.querySelector('#word').childNodes.length; x++) {
                            console.log(document.querySelector('#word').childNodes.item(x));
                        }
                    } else {
                        alert('não achou nenhuma letra');
                    }
                }

            // if(charValue === memory.charAt()) {
            //     document.querySelector('#word').innerHTML = memory.charAt(charValue);
            // } else {
            //     document.querySelector('#stickman').innerHTML = '<div class="error-'+ erro +'"></div>';
            // }
            // erro++
        });
    }

})();