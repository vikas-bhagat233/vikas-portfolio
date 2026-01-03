const form = document.getElementById("contactForm");
const statusEl = document.getElementById("status");

if (form) {
  form.addEventListener("submit", async e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    statusEl.textContent = "Sending...";

    try {
      const res = await fetch(
        "https://vikas-portfolio-1iw3.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message })
        }
      );

      const text = await res.text(); // SAFE for HTML or JSON

      if (!res.ok) {
        throw new Error(text || "Failed to submit");
      }

      statusEl.textContent = "Message sent successfully!";
      form.reset();
    } catch (err) {
      statusEl.textContent = "Error: " + err.message;
    }
  });
}
