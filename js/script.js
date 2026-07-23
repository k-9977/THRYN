

const revealElements = document.querySelectorAll(
    ".hero-image, .hero-content, .studio-content, .project, .statement, .footer-top"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);



revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});








const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if (menuButton && navLinks) {


    menuButton.addEventListener("click", () => {


        navLinks.classList.toggle("active");

        menuButton.classList.toggle("open");


    });



    document.querySelectorAll(".nav-links a").forEach(link => {


        link.addEventListener("click", () => {


            navLinks.classList.remove("active");

            menuButton.classList.remove("open");


        });


    });


}