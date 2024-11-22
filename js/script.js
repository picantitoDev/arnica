document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const viewportWidth = window.innerWidth;

    // Para pantallas grandes, duplica elementos en el carrusel
    if (viewportWidth >= 992) {
        carouselItems.forEach((item) => {
            let next = item.nextElementSibling;
            if (!next) next = carouselItems[0]; // Vuelve al inicio si es el último
            let clone = next.cloneNode(true);
            item.appendChild(clone);
        });
    }
});
