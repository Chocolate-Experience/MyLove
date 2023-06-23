const playButton = document.getElementById('play-button');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');
const downloadButton = document.getElementById('download-button');

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  const loaderText = document.createElement('p');
  loaderText.classList.add('loader-text');
  loaderText.textContent = 'Cargando mi amor por ti...';
  loader.appendChild(loaderText);

  // Simula un tiempo de carga de 5 segundos
  setTimeout(() => {
    loader.style.display = 'none'; // Oculta el loader
    document.body.style.overflow = 'visible'; // Muestra el contenido principal

    // Mostrar SweetAlert
    showSweetAlert();
  }, 5000);
});

function showSweetAlert() {
  Swal.fire({
    title: 'Advertencia',
    text: 'No soy un buen cantante, ni el mejor músico, tampoco soy compositor, jamas he compuesto una canción en mi vida hasta hoy, no soy el mejor programador, ni el hombre perfecto en este mundo; solo soy un chico que está locamente enamorado de ti.(Quédate hasta el final amor mío)',
    icon: 'warning',
    confirmButtonText: 'Aceptar'
  }).then(() => {
    // Reproducir el audio
    audio.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  });
}

function showFinalSweetAlert() {
  Swal.fire({
    title: '¿Entonces qué?',
    text: '¿Nos casamos?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Sí'
  }).then(() => {
    showLoveAlert();
  });
}

function showLoveAlert() {
  Swal.fire({
    title: 'JAJAJA',
    text: 'TE AMO',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
}

downloadButton.addEventListener('click', () => {
  window.location.href = 'https://drive.google.com/drive/folders/1fkM81W-mGPdVFTTlUV6dRTkyjaCNYvbI?usp=sharing';
});

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});

audio.addEventListener('timeupdate', () => {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  const progressWidth = (currentTime / duration) * 100;
  progress.style.width = `${progressWidth}%`;

  // Verificar si el audio ha terminado
  if (currentTime >= duration) {
    showFinalSweetAlert();
  }
});

progressBar.addEventListener('click', (event) => {
  const progressBarWidth = progressBar.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;
  const newPosition = (clickX / progressBarWidth) * duration;
  audio.currentTime = newPosition;
});
h