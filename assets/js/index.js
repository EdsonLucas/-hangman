(function() {
    let words, categoryChoice, wordChoice, el, memory, charValue, erro = 0;
    
    words = {
        "Animal": ["elefante", "cachorro", "guaxinim", "vaca"],
        "Profissão": ["professor", "carteiro", "doutor", "engenheiro"]
    }

    categoryChoice = Math.floor((Math.random()*Object.keys(words).length));
    wordChoice = Math.floor((Math.random()*4));
    
    document.querySelector('#category').innerHTML = Object.keys(words)[categoryChoice];

    Object.keys(words)[categoryChoice] === "Animal" ? memory = words["Animal"][wordChoice] : memory = words["Profissão"][wordChoice];

    document.querySelector('#word').innerHTML = memory.replace(/./g,"_");
    
    el = document.getElementsByClassName('btn');
    for(var x = 0; x <= el.length; x++) {
        el[x].addEventListener('click', function () {
            charValue = this.getAttribute('data-guide');

            console.log(memory.charAt(2));

            // if(charValue === memory.charAt()) {
            //     document.querySelector('#word').innerHTML = memory.charAt(charValue);
            // } else {
            //     document.querySelector('#stickman').innerHTML = '<div class="error-'+ erro +'"></div>';
            // }
            // erro++
        });
    }

})();