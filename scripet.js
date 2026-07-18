
function showSection(section){

    // sab sections hide karo
    document.getElementById("memories").style.display = "none";
    document.getElementById("dates").style.display = "none";
    document.getElementById("voice").style.display = "none";
    document.getElementById("sos").style.display = "none";


    // jis button par click hua uska section show karo
    let openSection = document.getElementById(section);

    openSection.style.display = "block";


    // smooth scroll
    openSection.scrollIntoView({
        behavior: "smooth"
    });

}
