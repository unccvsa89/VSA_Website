document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  const titleEl = document.getElementById("lightboxTitle");
  const dateEl = document.getElementById("lightboxDate");
  const descEl = document.getElementById("lightboxDesc");
  const eventLink = document.getElementById("eventLink");

const videoCards = document.querySelectorAll(".event-video-card");
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("eventVideo");
const videoClose = document.getElementById("videoClose");

videoCards.forEach(card => {

    card.addEventListener("click", () => {

        const videoSrc = card.dataset.video;

        videoPlayer.src = videoSrc;

        videoModal.classList.add("active");

        videoPlayer.play();
    });

});

videoClose.addEventListener("click", () => {

    videoModal.classList.remove("active");

    videoPlayer.pause();

    videoPlayer.src="";

});

  document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");

      // Image
      lightboxImg.src = img.src;

      // Text
      titleEl.textContent = card.dataset.title || "";
      dateEl.textContent = `${card.dataset.date || ""} • ${card.dataset.location || ""}`;
      descEl.innerHTML = card.dataset.description || "";


      // Optional link
      if (card.dataset.link) {
        eventLink.href = card.dataset.link;
        eventLink.style.display = "inline-block";
      } else {
        eventLink.style.display = "none";
      }

      lightbox.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  }
  
});
