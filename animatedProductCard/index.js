const circle = document.querySelector(".circles");
const shoeImgs = document.querySelector(".main-images");

function handleClick(event) {
    // Get only the color circle element
    if (
        event.target.classList.value !== "circles" &&
        event.target.classList.contains("circle")
    ) {
        const shoeColor = event.target.classList[1].replace("circle--", "");

        // Changing Product Image According to the shoe colour
        shoeImgs.querySelector(".active").classList.remove("active");
        shoeImgs.querySelector(`.${shoeColor}`).classList.add("active");

        // Changing Active Color
        circle.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
    }
}

circle.addEventListener("click", handleClick);
