document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('contactStatus');

  if (name && email && message) {
    status.textContent = "Message received! I'll be in touch soon.";
    status.style.color = "#00ff88";

  
    alert(" Your response is submitted successfully!");

    this.reset();
  } else {
    status.textContent = "Please fill out all fields.";
    status.style.color = "#ff4444";

    alert("Please fill out all fields before submitting.");
  }

  setTimeout(() => {
    status.textContent = "";
  }, 5000);
});
