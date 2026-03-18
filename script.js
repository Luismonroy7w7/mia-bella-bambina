// --- 1. CONFIGURACIÓN DE FRASES ---
const frases = [
    "Eres mi sol en los días nublados.",
    "No hay rincón en mi mente donde no estés tú.",
    "Eres el sueño del que nunca quiero despertar.",
    "Contigo descubrí que el amor no se busca, se construye.",
    "Tu mirada es el idioma que mi corazón mejor entiende.",
    "Eres la razón por la que creo en los 'para siempre'.",
    "A tu lado, el mundo se ve en colores más brillantes.",
    "Eres mi refugio favorito después de un día largo.",
    "Amarte es la aventura más hermosa de mi vida.",
    "No necesito que sea San Valentín para decirte que te amo.",
    "Eres la respuesta a todas mis oraciones.",
    "Tú haces que lo ordinario se vuelva extraordinario.",
    "En cada vida que me toque vivir, te elegiría a ti.",
    "Eres el suspiro que sale de mi boca cuando pienso en algo lindo.",
    "Tu voz es mi sonido preferido en todo el universo.",
    "Gracias por enseñarme lo que es el amor de verdad.",
    "Eres mi principio y mi fin, Meli.",
    "No hay café que me despierte tanto como un beso tuyo.",
    "Eres la magia que le faltaba a mis días.",
    "Amo cómo nos entendemos sin decir una sola palabra.",
    "Eres mi cable a tierra y mi impulso al cielo.",
    "Mi lugar favorito en el mundo es dentro de tus abrazos.",
    "Eres la luz que guía mi camino, incluso en la oscuridad.",
    "Estar contigo es sentir que finalmente llegué a casa.",
    "Eres el secreto mejor guardado de mi felicidad.",
    "No hay tesoro que valga más que un momento a tu lado.",
    "Eres la inspiración detrás de cada uno de mis éxitos.",
    "Tu amor es el combustible que me hace seguir adelante.",
    "Eres la calma que llega después de la tormenta.",
    "Amo la persona en la que me convierto cuando estoy contigo.",
    "Eres mi constante en un mundo lleno de cambios.",
    "No importa el destino, siempre que sea de tu mano.",
    "Eres la dueña de mi corazón y de mis pensamientos.",
    "Cada segundo contigo es un tesoro que guardo con llave.",
    "Eres el verso más lindo de mi poema favorito.",
    "Tu risa es la cura para cualquier tristeza.",
    "Eres mi estrella del norte, mi guía y mi destino.",
    "Amarte es tan natural como respirar.",
    "Eres el pedacito de cielo que me tocó en la tierra.",
    "Tu amor es el regalo que celebro todos los días.",
    "Eres el 'te quiero' más profundo de mi alma.",
    "Contigo, cada pequeño detalle se vuelve inolvidable.",
    "Eres el centro de mi pequeño universo.",
    "No hay nada más perfecto que un despertar a tu lado.",
    "Eres la razón por la que mi corazón late con fuerza.",
    "Tu ternura es mi debilidad favorita.",
    "Eres mi compañera de vida, de sueños y de locuras.",
    "Amo compartir mis días y mis noches contigo.",
    "Eres el reflejo de todo lo que siempre soñé.",
    "Gracias por ser mi paz en medio del ruido.",
    "Eres el latido que le da sentido a mi vida.",
    "A tu lado aprendí que los milagros sí existen.",
    "Eres la flor más bella de mi jardín personal.",
    "Tu amor me hace sentir que puedo lograrlo todo.",
    "Eres mi hoy, mi mañana y toda mi eternidad.",
    "No cambiaría ni un solo segundo de nuestra historia.",
    "Eres el puerto seguro donde siempre quiero anclar.",
    "Amo la forma en que cuidas de mí y de nosotros.",
    "Eres la mejor parte de mi realidad.",
    "Contigo, el amor es más sencillo y más hermoso.",
    "Eres el sueño que se hizo realidad frente a mis ojos.",
    "Tu presencia llena cada vacío de mi corazón.",
    "Eres la música que suena en mi cabeza todo el día.",
    "Amarte es el compromiso más dulce que he aceptado.",
    "Eres la razón por la que mis ojos brillan tanto.",
    "No hay poema que pueda describir lo que siento por ti.",
    "Eres mi alegría diaria, mi motivo y mi fuerza.",
    "Tu amor es el lenguaje universal de mi felicidad.",
    "Eres la persona que siempre esperé encontrar.",
    "Contigo el invierno se siente como primavera.",
    "Eres mi mayor orgullo y mi mayor fortuna.",
    "Amo cómo iluminas cada habitación con solo entrar.",
    "Eres el refugio donde mis miedos desaparecen.",
    "Tu bondad es lo que más me enamora de ti.",
    "Eres la pieza que le daba sentido a todo el juego.",
    "No necesito más que tu mano para sentirme poderoso.",
    "Eres el sol que calienta mi alma cada mañana.",
    "Tu amor es el viaje que nunca quiero terminar.",
    "Eres la definición perfecta de la felicidad para mí.",
    "A tu lado, el silencio también es una conversación hermosa.",
    "Eres la luz de mis ojos y la paz de mi espíritu.",
    "Cada beso tuyo me transporta a otro planeta.",
    "Eres la persona que cambió mi vida para mejor.",
    "Tu amor es el mapa que guía mis pasos.",
    "Eres la estrella que más brilla en mi firmamento.",
    "No hay nada más valioso que tu tiempo y tu cariño.",
    "Eres el sueño que no sabía que tenía.",
    "Amo construir este futuro a tu lado, Meli.",
    "Eres la esencia de todo lo que es bueno en mi mundo.",
    "Tu amor es el ancla que me mantiene firme.",
    "Eres el regalo más preciado que la vida me dio.",
    "Contigo, la vida es una película con final feliz.",
    "Eres la dueña de mis suspiros y de mis ganas de vivir.",
    "Tu dulzura es el ingrediente secreto de mi felicidad.",
    "Eres mi principio, mi medio y mi nunca acabar.",
    "Amo cada imperfección que te hace tan perfecta.",
    "Eres la razón por la que sonrío al mirar el celular.",
    "Tu amor es el tesoro que cuido con mi propia vida.",
    "Eres mi todo, hoy y por el resto de mis días.",
    "Simplemente, no me imagino un mundo donde no estés tú."
];

const fraseDisplay = document.getElementById('frase-display');
const nextBtn = document.getElementById('next-frase');

nextBtn.addEventListener('click', () => {
    fraseDisplay.classList.remove('glow');
    void fraseDisplay.offsetWidth; // Forzar reinicio de animación
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    fraseDisplay.innerText = randomFrase;
    fraseDisplay.classList.add('glow');
});

// --- 2. MODO NOCHE ---
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// --- 3. CORAZONES FLOTANTES DE FONDO ---
function createHeart() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.innerHTML = '💙';
    heart.className = 'floating-heart';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 10 + 10 + 'px';
    heart.style.opacity = Math.random();
    heart.style.transition = 'transform 5s linear, opacity 5s';
    heart.style.pointerEvents = 'none';
    container.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
    }, 100);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 800);

// --- 4. DESCARGAR CARTA (PDF) ---
document.getElementById('download-btn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const element = document.getElementById('carta-para-meli');
    html2canvas(element, { backgroundColor: null, scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 15, 15, 180, 0);
        pdf.save('Carta_Para_Meli.pdf');
    });
});

// --- 5. MOTOR DEL CORAZÓN (CANVAS) CON CONTROLES MÁGICOS ---
const heartExpBtn = document.getElementById('heart-exp-btn');
const heartOverlay = document.getElementById('heart-overlay');
const closeHeartBtn = document.getElementById('close-heart');
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
let arrows = [];
let shockwaves = [];
let animationId;
let heartHue = 340; 
let isRainbow = false;
let customColor = "#ff5fa2";
let heartBrightness = 70;
let heartAlpha = 0.9;

class Particle {
    constructor(x, y) {
        this.x = x; this.y = y;
        this.targetX = x; this.targetY = y;
        this.vx = 0; this.vy = 0;
    }
    update() {
        let dx = this.targetX - this.x;
        let dy = this.targetY - this.y;
        this.vx += dx * 0.02; this.vy += dy * 0.02;
        this.vx *= 0.85; this.vy *= 0.85;
        this.x += this.vx; this.y += this.vy;
    }
    draw() {
        ctx.beginPath();
        if (isRainbow) {
            ctx.fillStyle = `hsla(${heartHue}, 100%, ${heartBrightness}%, ${heartAlpha})`;
        } else {
            ctx.globalAlpha = heartAlpha;
            ctx.fillStyle = customColor;
        }
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }
}

function isInHeart(x, y) {
    return Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y <= 0;
}

function createHeartParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2; 
    const scale = Math.min(canvas.width, canvas.height) / 18 * 5;
    particles = [];
    let count = 0;
    const numParticles = window.innerWidth < 768 ? 1500 : 3500;
    while (count < numParticles) {
        let px = (Math.random() * 4 - 2);
        let py = (Math.random() * 4 - 2);
        if (isInHeart(px, py)) {
            particles.push(new Particle(cx + px * scale, cy - py * scale));
            count++;
        }
    }
}

class Arrow {
    constructor(targetX, targetY) {
        const edges = [
            {x: -50, y: Math.random()*canvas.height},
            {x: canvas.width+50, y: Math.random()*canvas.height},
            {x: Math.random()*canvas.width, y: -50},
            {x: Math.random()*canvas.width, y: canvas.height+50}
        ];
        const start = edges[Math.floor(Math.random()*edges.length)];
        this.x = start.x; this.y = start.y;
        this.angle = Math.atan2(targetY - this.y, targetX - this.x);
        this.speed = 12;
    }
    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        particles.forEach(p => {
            let dx = p.x - this.x; let dy = p.y - this.y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if(dist < 60) {
                let f = (60 - dist) * 0.08;
                p.vx += (dx/dist) * f; p.vy += (dy/dist) * f;
                if(Math.random() < 0.03) shockwaves.push(new Shockwave(this.x, this.y));
            }
        });
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y); ctx.rotate(this.angle);
        ctx.fillStyle = "white"; ctx.fillRect(-10, -2, 20, 4);
        ctx.restore();
    }
}

class Shockwave {
    constructor(x, y) { this.x = x; this.y = y; this.radius = 0; this.opacity = 1; }
    update() { this.radius += 2.5; this.opacity -= 0.03; }
    draw() {
        if(this.opacity > 0) {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            ctx.strokeStyle = isRainbow ? `hsla(${heartHue}, 100%, 70%, ${this.opacity})` : customColor;
            ctx.lineWidth = 2; ctx.stroke();
        }
    }
}

function animateHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isRainbow) heartHue = (heartHue + 1) % 360;
    
    particles.forEach(p => { p.update(); p.draw(); });
    arrows.forEach(a => { a.update(); a.draw(); });
    shockwaves.forEach((s, i) => {
        s.update(); s.draw();
        if(s.opacity <= 0) shockwaves.splice(i, 1);
    });
    arrows = arrows.filter(a => a.x > -100 && a.x < canvas.width+100 && a.y > -100 && a.y < canvas.height+100);
    animationId = requestAnimationFrame(animateHeart);
}

// Eventos de Control del Canvas
document.getElementById('btn-rainbow').addEventListener('click', () => {
    isRainbow = !isRainbow;
    document.getElementById('btn-rainbow').innerText = isRainbow ? "Fijar Color 🌸" : "Efecto Arcoíris 🌈";
});
document.getElementById('color-picker').addEventListener('input', (e) => {
    isRainbow = false;
    customColor = e.target.value;
});
document.getElementById('brightness-slider').addEventListener('input', (e) => {
    heartBrightness = e.target.value;
});
document.getElementById('alpha-slider').addEventListener('input', (e) => {
    heartAlpha = e.target.value;
});

heartExpBtn.addEventListener('click', () => {
    heartOverlay.classList.remove('hidden');
    createHeartParticles();
    animateHeart();
});

closeHeartBtn.addEventListener('click', () => {
    heartOverlay.classList.add('hidden');
    cancelAnimationFrame(animationId);
});

canvas.addEventListener("click", (e) => {
    arrows.push(new Arrow(e.clientX, e.clientY));
});

window.addEventListener("resize", () => {
    if(!heartOverlay.classList.contains('hidden')) createHeartParticles();
});

// --- 6. REPRODUCTOR DE MÚSICA ---
const music = document.getElementById("bg-music");
const playPauseBtn = document.getElementById("playPause");
const progressBar = document.getElementById("progress-bar");
const volumeSlider = document.getElementById("volume-slider");
const currentTimeEl = document.getElementById("current-time");
const durationTimeEl = document.getElementById("duration-time");

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

playPauseBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        music.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

music.addEventListener("timeupdate", () => {
    if (!isNaN(music.duration)) {
        const progress = (music.currentTime / music.duration) * 100;
        progressBar.value = progress;
        currentTimeEl.innerText = formatTime(music.currentTime);
    }
});

music.addEventListener("loadedmetadata", () => {
    durationTimeEl.innerText = formatTime(music.duration);
});

progressBar.addEventListener("input", () => {
    const seekTime = (progressBar.value / 100) * music.duration;
    music.currentTime = seekTime;
});

volumeSlider.addEventListener("input", () => {
    music.volume = volumeSlider.value;
});
// --- 7. CORRECCIÓN ESPECÍFICA PARA IPHONE (OCULTAR VOLUMEN) ---
function handleIOSVolumeControl() {
    // Detectar si el dispositivo es iOS (iPhone, iPad, iPod)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isIOS) {
        const volumeContainer = document.querySelector('.volume-control-container') || volumeSlider.parentElement;
        
        if (volumeContainer) {
            // Ocultamos el control de volumen
            volumeContainer.style.display = 'none';
            
            // Opcional: Podemos mostrar un pequeño mensaje o simplemente dejar que use los botones físicos
            console.log("iOS detectado: El control de volumen por software está deshabilitado por Apple.");
        }
    }
}

// Ejecutar la detección al cargar
handleIOSVolumeControl();