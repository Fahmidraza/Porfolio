(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
var typed = new Typed(".typing",{
    strings: ["Electronics Engineer", "ECE Undergrad","Advance Electronics Enthusiast","MEMS Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
});
var typed2 = new Typed(".typing-2",{
    strings: ["Embedded System", "IoT", "Machine Learning"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
});
typed();
typed2();
