function scaleWindow() {
    const main = document.querySelector("main");

    const scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
    );

    const scaledWidth = 1920 * scale;
    const scaledHeight = 1080 * scale;

    const offsetX = (window.innerWidth - scaledWidth) / 2;
    const offsetY = (window.innerHeight - scaledHeight) / 2;

    main.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

window.addEventListener("resize", scaleWindow);
scaleWindow();