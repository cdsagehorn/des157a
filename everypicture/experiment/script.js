(function(){
    'use strict';

    // Store the elements used for the memory overlays.
    const overlay = document.querySelector('#overlay');
    const storyTitle = document.querySelector('#story-title');
    const storyText = document.querySelector('#story-text');
    const memoryHint = document.querySelector('#memory-hint');


    // Backpack interactions.

    document.querySelector('#backpack').addEventListener('mouseover', function(){
        memoryHint.innerHTML = 'A bag full of things is also a record of a day.';
    });

    document.querySelector('#backpack').addEventListener('mouseout', function(){
        memoryHint.innerHTML = 'These objects look ordinary until you remember why you kept them.';
    });

    document.querySelector('#backpack').addEventListener('click', function(){
        storyTitle.innerHTML = 'The backpack';

        storyText.innerHTML = 'My backpack follows me between different places and responsibilities. It may look like a collection of ordinary supplies, but each pocket carries part of my daily routine.';

        overlay.className = 'showing';
    });


    // School and work interactions.

    document.querySelector('#school').addEventListener('mouseover', function(){
        memoryHint.innerHTML = 'Some objects carry responsibilities.';
    });

    document.querySelector('#school').addEventListener('mouseout', function(){
        memoryHint.innerHTML = 'These objects look ordinary until you remember why you kept them.';
    });

    document.querySelector('#school').addEventListener('click', function(){
        storyTitle.innerHTML = 'School and work';

        storyText.innerHTML = 'My laptop and notebooks connect to projects, deadlines, and progress. They remind me that the things I carry are also connected to what I am trying to accomplish.';

        overlay.className = 'showing';
    });


    // Everyday essentials interactions.

    document.querySelector('#essentials').addEventListener('mouseover', function(){
        memoryHint.innerHTML = 'The most familiar objects are the easiest to overlook.';
    });

    document.querySelector('#essentials').addEventListener('mouseout', function(){
        memoryHint.innerHTML = 'These objects look ordinary until you remember why you kept them.';
    });

    document.querySelector('#essentials').addEventListener('click', function(){
        storyTitle.innerHTML = 'Everyday essentials';

        storyText.innerHTML = 'My wallet, keys, and AirPods are small things I reach for almost automatically. They represent independence, movement, and the repeated routines that shape my days.';

        overlay.className = 'showing';
    });


    // Orientation note interactions.

    document.querySelector('#note').addEventListener('mouseover', function(){
        memoryHint.innerHTML = 'A small piece of paper can hold an important promise.';
    });

    document.querySelector('#note').addEventListener('mouseout', function(){
        memoryHint.innerHTML = 'These objects look ordinary until you remember why you kept them.';
    });

    document.querySelector('#note').addEventListener('click', function(){
        storyTitle.innerHTML = 'A reminder to myself';

        storyText.innerHTML = 'During Aggie Orientation, I wrote a motivational note that said, "Keep going for your family." I kept it because its message still reminds me why I want to keep moving forward.';

        overlay.className = 'showing';
    });


    // Personal technology interactions.

    document.querySelector('#technology').addEventListener('mouseover', function(){
        memoryHint.innerHTML = 'Not every part of my day is about school.';
    });

    document.querySelector('#technology').addEventListener('mouseout', function(){
        memoryHint.innerHTML = 'These objects look ordinary until you remember why you kept them.';
    });

    document.querySelector('#technology').addEventListener('click', function(){
        storyTitle.innerHTML = 'Personal space';

        storyText.innerHTML = 'My headphones and desk setup represent time spent focusing, creating, and enjoying my interests. They show a side of my routine that is more personal than a class schedule.';

        overlay.className = 'showing';
    });


    // Close the overlay using the button.

    document.querySelector('#close').addEventListener('click', function(){
        overlay.className = 'hidden';
    });


    // Close the overlay using the Escape key.

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
            overlay.className = 'hidden';
        }
    });

})();