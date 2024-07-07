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
