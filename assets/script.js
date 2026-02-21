function toggleMusic() {
  const audio = document.getElementById('myAudio');
  const btn = document.getElementById('musicBtn');
  
  if (audio.paused) {
    audio.play()
    btn.textContent = '⏸ Pause Music';
  } else {
    audio.pause()
    btn.textContent = '♫ Play Music';
  }
}
