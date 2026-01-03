const form = document.getElementById("contactForm");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  statusEl.textContent = "Sending…";

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to submit");
    }

    statusEl.textContent = "Message sent successfully!";
    form.reset();
  } catch (err) {
    statusEl.textContent = `Error: ${err.message}`;
  }
});
