// Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Demo Alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been sent!");
  this.reset();
});
