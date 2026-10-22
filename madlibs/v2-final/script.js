(function(){

    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const formView = document.querySelector('.form-view');
    const reportView = document.querySelector('.report-view');
    const playAgain = document.querySelector('#play-again');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const personName = document.querySelector('#person-name').value;
        const adjective = document.querySelector('#adjective').value;
        const animal = document.querySelector('#animal').value;
        const number = document.querySelector('#number').value;
        const food = document.querySelector('#food').value;
        const verb = document.querySelector('#verb').value;
        const place = document.querySelector('#place').value;
        const color = document.querySelector('#color').value;
        const pluralNoun = document.querySelector('#plural-noun').value;
        const exclamation = document.querySelector('#exclamation').value;

        if(number <= 1){

            alert('Please enter a number greater than 1');
            document.querySelector('#number').focus();

        }
        else {

            const myText = `
                <p>
                    Captain <strong class="user-word">${personName}</strong> had been chosen
                    to lead the most <strong class="user-word">${adjective}</strong> space
                    mission in history. Everything was going according to plan until a giant
                    <strong class="user-word">${animal}</strong> suddenly appeared outside
                    the spaceship.
                </p>

                <p>
                    The crew only had <strong class="user-word">${number}</strong> minutes
                    to figure out what to do. In a panic, someone grabbed a container of
                    <strong class="user-word">${food}</strong> and launched it out of the
                    airlock.
                </p>

                <p>
                    While everyone was <strong class="user-word">${verb}</strong>, the
                    spaceship suddenly changed direction and started flying toward
                    <strong class="user-word">${place}</strong>.
                </p>

                <p>
                    Without warning, every light turned
                    <strong class="user-word">${color}</strong>, and
                    <strong class="user-word">${pluralNoun}</strong> started flying around
                    the cabin. Captain ${personName} looked at the crew and shouted,
                    "<strong class="user-word">${exclamation}</strong>"
                </p>

                <p>
                    Somehow, the crew survived the mission. Nobody could explain what
                    happened, but they all agreed on one thing: they were never going
                    to space again!
                </p>
            `;

            madlib.innerHTML = myText;

            formView.className = 'form-view hidden';
            reportView.className = 'report-view';

            document.querySelector('#person-name').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#animal').value = '';
            document.querySelector('#number').value = '';
            document.querySelector('#food').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#place').value = '';
            document.querySelector('#color').value = '';
            document.querySelector('#plural-noun').value = '';
            document.querySelector('#exclamation').value = '';

        }

    });

    playAgain.addEventListener('click', function(){

        reportView.className = 'report-view hidden';
        formView.className = 'form-view';

    });

})();