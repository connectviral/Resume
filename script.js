document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav a");

    // Show/hide back to top button based on scroll position
    document.addEventListener("scroll", function () {
        const backToTopBtn = document.getElementById("backToTopBtn");
        if (window.scrollY > 200) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));

            sections.forEach((section) => {
                section.classList.remove("highlight");
            });

            targetSection.classList.add("highlight");

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            link.classList.add("active");

            // Scroll to the target section with smooth animation
            const scrollOptions = {
                top: targetSection.offsetTop,
                behavior: "smooth",
            };
            window.scrollTo(scrollOptions);

            // Remove the highlight class after 1.5 seconds
            setTimeout(() => {
                targetSection.classList.remove("highlight");
                link.classList.remove("active");
            }, 1500);
        });
    });
});
