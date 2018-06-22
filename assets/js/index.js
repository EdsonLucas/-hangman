(function() {
    let words, categoryChoice, wordChoice, el, memory, charValue, error = 0;

    words = {
        "ANIMAL": ["ELEFANTE", "CACHORRO", "GUAXINIM", "VACA"],
        "PROFISSÃO": ["PROFESSOR", "CARTEIRO", "DOUTOR", "ENGENHEIRO"]
    }

    categoryChoice = Math.floor((Math.random()*Object.keys(words).length));
    wordChoice = Math.floor((Math.random()*4));

    document.querySelector('#category').innerHTML = Object.keys(words)[categoryChoice];

    Object.keys(words)[categoryChoice] === "ANIMAL" ? memory = words["ANIMAL"][wordChoice] : memory = words["PROFISSÃO"][wordChoice];

    let preg = memory.replace(/./g,"_");
    document.querySelector('#word').innerHTML = preg;

    el = document.getElementsByClassName('btn');
    for(let x = 0; x <= el.length; x++) {
        el[x].addEventListener('click', function () {
            charValue = this.getAttribute('data-guide');

            let position = [];
            for(let w = 0; w < memory.length; w++) {
              if(memory[w] === charValue) position.push(w);
            }

            if(position.length > 0) {
                let letters = document.querySelector('#word').innerHTML;
                for(let j = 0; j < position.length; j++) {
                    letters = letters.substr(0, position[j]) + charValue + letters.substr(position[j] + 1);
                    document.querySelector('#word').innerHTML = letters;
                }

            } else {
                erro();
            }

        });
    }

    function erro() {
        let stick = document.querySelector('#stickman');

        let div = document.createElement('div');
        div.classList.add('error-' + error);
        stick.appendChild(div);

        error++;
    }

})();