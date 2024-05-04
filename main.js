// Enable hidden nav bar

const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY) {
        nav.classList.add("nav-hidden");
    } else {
        nav.classList.remove("nav-hidden");
    }

    lastScrollY = window.scrollY;
});

// Image carousel in projcet cards
document.querySelectorAll(".card-carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav">
            ${ buttonsHtml.join("") }
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel-button")

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-button-selected"));

            items[i].classList.add("carousel-item-selected");
            button.classList.add("carousel-button-selected");
        });
    })

    items[0].classList.add("carousel-item-selected");
    buttons[0].classList.add("carousel-button-selected");
});