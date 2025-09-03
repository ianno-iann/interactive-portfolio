// Dark/Light Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Project Gallery Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.project').forEach(project => {
      if (filter === 'all' || project.dataset.category === filter) {
        project.style.display = '';
      } else {
        project.style.display = 'none';
      }
    });
    // Highlight active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');
  let msg = document.getElementById('formMsg');

  // Reset styles
  [name, email, message].forEach(input => input.style.border = '');

  // Validate Name
  if (!name.value.trim()) {
    name.style.border = '2px solid red';
    valid = false;
  }

  // Validate Email
  if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    email.style.border = '2px solid red';
    valid = false;
  }

  // Validate Message
  if (!message.value.trim()) {
    message.style.border = '2px solid red';
    valid = false;
  }

  if (valid) {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
    this.reset();
  } else {
    msg.textContent = "Please fill all fields correctly.";
    msg.style.color = "red";
  }
});
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  formMsg.textContent = "Sending...";
  formMsg.style.color = "#0ea5e9";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      formMsg.textContent = "✅ Message sent! I’ll get back to you soon.";
      formMsg.style.color = "green";
      form.reset();
    } else {
      formMsg.textContent = "❌ Something went wrong. Please try again.";
      formMsg.style.color = "red";
    }
  } catch {
    formMsg.textContent = "⚠️ Network error. Please try again.";
    formMsg.style.color = "red";
  }
});
