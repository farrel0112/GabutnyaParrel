document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fitur-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
});

const emergencyForm = document.getElementById("emergencyCallForm");
const emergencyMessage = document.getElementById("emergencyMessage");
const emergencyStatus = document.getElementById("emergencyStatus");

emergencyForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const message = emergencyMessage.value.trim();

  if (message.length > 0) {
    emergencyStatus.textContent = "🚨 Panggilan darurat telah dikirim!";
    emergencyStatus.style.display = "block";
    emergencyMessage.value = "";

    setTimeout(() => {
      emergencyStatus.style.display = "none";
    }, 4000);
  } else {
    emergencyStatus.textContent = "⚠️ Harap isi deskripsi masalah.";
    emergencyStatus.style.color = "red";
    emergencyStatus.style.display = "block";
  }
});
