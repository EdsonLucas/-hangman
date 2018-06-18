(function() {
    let words, categoryChoice, wordChoice;

    words = {
        "Animal": ["elefante", "águia", "guaxinim", "leão"],
        "Profissão": ["professor", "secretária", "doutor", "engenheiro"]
    }

    categoryChoice = Math.floor((Math.random()*2));

    wordChoice = Math.floor((Math.random()*4));

    document.querySelector('#category').innerHTML = Object.keys(words)[categoryChoice];

    console.log(Object.keys(words)[categoryChoice] === "Animal" ? words["Animal"][wordChoice] : words["Profissão"][wordChoice]);

})();