onload = () => {
  document.body.classList.remove("container");

  document.getElementById('startBtn').addEventListener('click', () => {
  const audio = document.getElementById('miAudio');
  const contenido = document.getElementById('contenido');
  const startScreen = document.getElementById('startScreen');

  // mostrar animación
  contenido.style.display = 'block';

  // ocultar pantalla inicial
  startScreen.style.display = 'none';

  // reproducir audio
  audio.play().catch(()=>{});
});
};