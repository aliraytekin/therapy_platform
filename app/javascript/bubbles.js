const canvas = document.getElementById("bubbles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

class Bubble {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.radius = 5 + Math.random() * 15;
    this.speed = 0.2 + Math.random() * 1;
    this.opacity = 0.1 + Math.random() * 0.3;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
  }
  update() {
    this.y -= this.speed;
    if (this.y + this.radius < 0) {
      this.y = canvas.height + this.radius;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

function initBubbles() {
  bubbles = [];
  for (let i = 0; i < 40; i++) {
    bubbles.push(new Bubble());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(bubble => bubble.update());
  requestAnimationFrame(animate);
}

initBubbles();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initBubbles();
});
