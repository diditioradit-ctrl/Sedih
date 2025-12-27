const bgMusic = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');

// Fungsi untuk memulai musik
playBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playBtn.innerText = "Musik Aktif!";
        playBtn.style.background = "#4CAF50";
    } else {
        bgMusic.pause();
        playBtn.innerText = "Mulai Penelusuran";
        playBtn.style.background = "#00b4d8";
    }
});

// Trick untuk Auto-play (tergantung browser pengguna)
window.addEventListener('load', () => {
    bgMusic.volume = 0.5; // Set volume ke 50%
});