(function () {
    'use strict';
    console.log('reading js');

    // Store the elements used in the interactions.
    const stage = document.querySelector('#stage');
    const openBag = document.querySelector('#open-bag');
    const resetBag = document.querySelector('#reset-bag');
    const bagStoryButton = document.querySelector('#bag-story');
    const overlay = document.querySelector('#overlay');
    const closeButton = document.querySelector('#close');
    const storyTitle = document.querySelector('#story-title');
    const storyText = document.querySelector('#story-text');
    const storyImage = document.querySelector('#story-image');
    const storyLabel = document.querySelector('#story-label');
    const memoryHint = document.querySelector('#memory-hint');

    // Store the backpack's own story.
    const backpackMemory = [
        '#bag-story',
        '00 / The backpack',
        'The story I carry every day',
        'My backpack follows me through different parts of my daily life. The things inside it connect my classes, work, family, and time for myself. Although it looks like an ordinary bag, I see it as a small record of what matters to me and what I am trying to become.',
        'images/backpack.jpg',
        'My open backpack showing my everyday belongings'
    ];

    // Store each object's story in a nested array.
    const memories = [
        [
            '#school',
            '01 / School and work',
            'The work I carry',
            'My notebooks and folders move between classes and projects with me. As a design student, I am often moving from one assignment to another, and these materials remind me of the effort behind each finished piece. They represent the goals I am working toward, even on days when my progress feels slow.',
            'images/school-work.jpg',
            'My notebooks and school materials',
            'These pages represent the work behind my goals.'
        ],
        [
            '#essentials',
            '02 / Everyday essentials',
            'Small signs of independence',
            'I reach for my wallet, keys, and AirPods without giving them much thought. But together they represent my everyday independence: getting where I need to go, handling responsibilities, and finding little moments for myself. They are some of the smallest things I carry, yet I notice immediately when one is missing.',
            'images/essentials.jpg',
            'My wallet, keys, and AirPods',
            'Small objects can say a lot about an ordinary day.'
        ],
        [
            '#note',
            '03 / A reminder',
            'Keep going for your family',
            'During Aggie Orientation, I wrote a note that said, "Keep going for your family." I kept it because it is more than an old piece of paper. It reminds me why I put effort into my education and why I want to keep moving forward. Of everything I carry, this may be one of the lightest objects with the greatest meaning.',
            'images/orientation-note.jpg',
            'My orange motivational note from Aggie Orientation',
            'A little piece of paper can carry a powerful reason.'
        ],
        [
            '#technology',
            '04 / Personal space',
            'Time that feels like mine',
            'My headphones and technology setup remind me that my daily life is not only about school and work. They are part of the time I spend focusing, creating, and enjoying my interests. After a day of responsibilities, moments with my own music, projects, or hobbies help me feel like myself again.',
            'images/technology.jpg',
            'My headphones and personal technology setup',
            'Not everything I carry is connected to a deadline.'
        ]
    ];

    // Unpack the backpack when it is clicked.
    // The CSS class reveals the empty backpack photograph
    // and moves the four object photographs outward.
    openBag.addEventListener('click', function () {
        stage.className = 'stage opened';
        memoryHint.innerHTML = 'Choose an object to find out what it remembers.';
    });

    // Restore the original backpack and hide the objects.
    resetBag.addEventListener('click', function () {
        stage.className = 'stage';
        memoryHint.innerHTML = 'Start by clicking the backpack photograph.';
    });

    // Reuse one overlay for all of the personal stories.
    function showMemory(memory) {
        storyLabel.innerHTML = memory[1];
        storyTitle.innerHTML = memory[2];
        storyText.innerHTML = memory[3];
        storyImage.src = memory[4];
        storyImage.alt = memory[5];
        overlay.className = 'showing';
        closeButton.focus();
    }

    // Display the backpack's own story.
    bagStoryButton.addEventListener('click', function () {
        showMemory(backpackMemory);
    });

    // Give all four photographs the same interactions.
    for (const eachMemory of memories) {
        const item = document.querySelector(eachMemory[0]);
        let previousRotation = 0;

        // Clicking a photograph reveals its story.
        item.addEventListener('click', function () {
            showMemory(eachMemory);
        });

        // Update the hint when hovering over an object.
        item.addEventListener('mouseover', function () {
            memoryHint.innerHTML = eachMemory[6];
        });

        // Restore the hint and photograph position.
        item.addEventListener('mouseout', function () {
            memoryHint.innerHTML = 'Choose an object to find out what it remembers.';
            item.style.transform = 'rotate(0deg)';
            previousRotation = 0;
        });

        // Use mouse position to tilt the photograph.
        // Update only when the rotation value changes.
        item.addEventListener('mousemove', function (event) {
            const percentWidth = window.innerWidth / 100;
            const xPosition = event.clientX;
            const rotation = Math.floor(xPosition / percentWidth / 12) - 4;

            if (rotation !== previousRotation) {
                item.style.transform = `rotate(${rotation}deg)`;
                previousRotation = rotation;
            }
        });
    }

    // Close the story using the Close button.
    closeButton.addEventListener('click', function () {
        overlay.className = 'hidden';
    });

    // Close the story using the Escape key.
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            overlay.className = 'hidden';
        }
    });

    // Close the story when clicking outside the panel.
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.className = 'hidden';
        }
    });

})();