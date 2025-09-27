// Initialize modal functionality
function initModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".modal-close");

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });

  // Add click event to all images
  document.querySelectorAll(".portfolio-grid img").forEach((img) => {
    img.addEventListener("click", function () {
      console.log("Image clicked:", this.src); // Debug log
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });
}

function showTab(tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");

  const activeButton = document.querySelector(
    `button[onclick="showTab('${tabName}')"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

// Initialize everything when the page loads
document.addEventListener("DOMContentLoaded", function () {
  showTab("portfolio");
  initModal();
});
