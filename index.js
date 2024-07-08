// show header on scrolling
(function () {
    const header = document.querySelector("header");
    const sectionOne = document.querySelector(".hero");

    const sectionOneOptions = {
        rootMargin: "-100px 0px 0px 0px",
    };

    const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                header.classList.add("active-scroll");
            } else {
                header.classList.remove("active-scroll");
            }
        });
    }, sectionOneOptions);

    sectionOneObserver.observe(sectionOne);
})();

// Slider
;(function slider() {
    const cardSlider = document.querySelector('.testimonial .card__container')
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')

    const cards = Array.from(cardSlider.children)

    console.log(cards)

    
    // select first and last nodes
    const firstCard = cards[0]
    const lastCard = cards[cards.length - 1]

    let counter = 1
    let animationDuration = 1000
    let lastTime = 0

    cards.push(cloneImage(firstCard, null, cardSlider))
    cards.unshift(cloneImage(lastCard, firstCard, cardSlider))

    // update the container size for added nodes
    cardSlider.style.width = `${cards.length * 33.33}%`

    // EventListeners
    prevBtn.addEventListener('click', prevBtnClickHandler)
    nextBtn.addEventListener('click', nextBtnClickHandler)
    cardSlider.addEventListener('transitionend', counterIncrementHandler)

    // Set the proper slide initially
    changeSlides()
    console.log(counter)

    function nextBtnClickHandler() {
        moveHandler('right')
    }

    function prevBtnClickHandler() {
        moveHandler('left')
    }

    // Moves the slide container horizontally
    function changeSlides() {
        cardSlider.style.transform = `translateX(-${(counter * 100) / cards.length}%)`
    }

    // Add transitions and update counter
    function moveHandler(direction) {
        let currentTime = new Date().getTime()
        if (currentTime - lastTime < animationDuration) {
            return
        }
        direction === 'right' ? counter++ : counter--
        cardSlider.style.transition = 'all 0.4s ease-in-out'
        changeSlides()

        lastTime = currentTime

        console.log(counter)
    }

    //reset the counter and transition and then change slides
    function counterIncrementHandler() {
        if (counter === 0) {
            cardSlider.style.transition = 'none'
            counter = 3
            changeSlides()
        } else if (counter === cards.length - 1) {
            cardSlider.style.transition = 'none'
            counter = 1
            changeSlides()
        }
    }

    // duplicate node to put before and after
    function cloneImage(elem, refElem, arr) {
        const clone = elem.cloneNode(true)
        arr.insertBefore(clone, refElem)
        return clone
    }
})()
