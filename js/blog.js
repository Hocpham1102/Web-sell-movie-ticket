let currentSlide = 0;

// Hàm để thay đổi slide
function changeSlide(step) {
  currentSlide += step;
  showSlide(currentSlide);
}

// Hàm để hiển thị slide hiện tại
function showSlide(slideIndex) {
  const slides = document.querySelectorAll(".carousel-image");
  if (slideIndex >= slides.length) {
    currentSlide = 0; // Quay lại slide đầu
  } else if (slideIndex < 0) {
    currentSlide = slides.length - 1; // Quay lại slide cuối
  }
  const offset = -currentSlide * 100; // Tính toán vị trí dịch chuyển
  document.getElementById(
    "carouselImages"
  ).style.transform = `translateX(${offset}%)`;
}

function openTab(event, tabId) {
  // Remove 'active' class from all tab buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add 'active' class to clicked tab button
  event.currentTarget.classList.add("active");
}

function viewDetails(blogId) {
  // Get the clicked blog item
  const blogItem = document.getElementById(blogId);
  const modalContent = document.getElementById("modalContent");

  // Set the modal content to the HTML of the blog item
  modalContent.innerHTML = blogItem.innerHTML;

  // Show the modal
  document.getElementById("blogModal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("blogModal").style.display = "none";
}
