onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  window.onload = () => {
    const audio = document.getElementById("audio");
    audio.play();
    audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  };