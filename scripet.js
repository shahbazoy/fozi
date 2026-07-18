function showSection(section) {

    const sections = ["memories", "dates", "voice", "sos"];

    sections.forEach(function(id) {
        const element = document.getElementById(id);
        element.style.display = "none";
    });

    const current = document.getElementById(section);

    current.style.display = "block";

    current.style.opacity = "0";
    current.style.transform = "translateY(20px)";

    setTimeout(function() {
        current.style.transition = "0.4s";
        current.style.opacity = "1";
        current.style.transform = "translateY(0)";
    }, 10);

    current.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
