const menubtn = document.getElementById("menubtn")
const list = document.getElementById("list")
const navi = document.querySelector(".navi")


menubtn.addEventListener("click", () => {
    list.classList.toggle("active")
})

document.addEventListener("click", (e) => {
    if (innerWidth < 600) {
        if (!navi.contains(e.target) && e.target !== menubtn) {
            list.classList.remove("active")
        }
    }
})

const slides = document.querySelectorAll(".slide");
let index = 0;

function showNextSlide() {
    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
}

setInterval(showNextSlide, 3000); 