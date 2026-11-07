const ALLOWED_NAME = "Letícia";
const form = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const errorMessage = document.getElementById("errorMessage");
const gate = document.getElementById("gate");
const letter = document.getElementById("letter");
const music = document.getElementById("backgroundMusic");
const musicControl = document.getElementById("musicControl");
const pauseIcon = document.getElementById("pauseIcon");
const playIcon = document.getElementById("playIcon");

// Discretas partículas e pétalas geradas no navegador.
const particleLayer = document.getElementById("particles");
for (let i = 0; i < 34; i++) {
  const particle = document.createElement("span");
  particle.className = i % 3 === 0 ? "particle light" : "particle";
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${13 + Math.random() * 19}s`;
  particle.style.animationDelay = `${-Math.random() * 28}s`;
  particle.style.setProperty("--shift", `${Math.round(Math.random() * 180 - 90)}px`);
  particle.style.opacity = `${0.2 + Math.random() * 0.45}`;
  particleLayer.appendChild(particle);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // A comparação é intencionalmente exata: sem remover acentos ou alterar maiúsculas.
  if (nameInput.value !== ALLOWED_NAME) {
    errorMessage.textContent = "Não foi possível confirmar o acesso. Verifique o nome e tente novamente.";
    nameInput.setAttribute("aria-invalid", "true");
    nameInput.focus();
    return;
  }

  errorMessage.textContent = "";
  nameInput.removeAttribute("aria-invalid");
  gate.classList.remove("active");
  letter.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // A reprodução é iniciada após a interação do usuário, conforme as regras dos navegadores.
  musicControl.hidden = false;
  try {
    await music.play();
    setMusicState(true);
  } catch {
    // Se o arquivo de áudio não estiver presente ou não puder tocar, o texto continua acessível.
    musicControl.hidden = true;
  }
});

function setMusicState(isPlaying) {
  pauseIcon.hidden = !isPlaying;
  playIcon.hidden = isPlaying;
  musicControl.setAttribute("aria-label", isPlaying ? "Pausar música" : "Reproduzir música");
  musicControl.title = isPlaying ? "Pausar música" : "Reproduzir música";
}

musicControl.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      setMusicState(true);
    } catch {
      setMusicState(false);
    }
  } else {
    music.pause();
    setMusicState(false);
  }
});

music.addEventListener("ended", () => setMusicState(false));
