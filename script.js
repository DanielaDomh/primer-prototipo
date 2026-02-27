const revealBtn = document.getElementById("revealBtn");
const videoWrapper = document.getElementById("videoWrapper");
const ytFrame = document.getElementById("ytFrame");

const videoId = "fOwfDcl8wZs";
const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`;

revealBtn.addEventListener("click", () => {
  ytFrame.src = embedUrl;
  videoWrapper.classList.remove("hidden");
  revealBtn.style.display = "none";
});
