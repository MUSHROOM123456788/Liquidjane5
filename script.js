document.addEventListener("DOMContentLoaded", () => {
  const fishes = document.querySelectorAll(".fish");
  let angle = 0;

  function orbit() {
    angle += 0.005; // slower rotation
    const radius = 180;
    const centerX = window.innerWidth / 2;
    const centerY = 250;

    fishes.forEach((fish, i) => {
      const a = angle + (i * (2 * Math.PI / fishes.length));
      const x = centerX + radius * Math.cos(a);
      const y = centerY + radius * Math.sin(a);
      fish.style.left = `${x}px`;
      fish.style.top = `${y}px`;
    });

    requestAnimationFrame(orbit);
  }

  orbit();
});
