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
        "https://vikas-portfolio.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message })
        }
      );

      const contentType = res.headers.get("content-type") || "";
      const body = contentType.includes("application/json")
        ? await res.json().catch(() => null)
        : await res.text().catch(() => "");

      if (!res.ok) {
        if (body && typeof body === "object" && body.error) {
          throw new Error(body.error);
        }
        if (typeof body === "string" && body.trim()) {
          throw new Error(body.slice(0, 180));
        }
        throw new Error("Failed to submit");
      }

      statusEl.textContent = "Message sent successfully!";
      form.reset();
    } catch (err) {
      statusEl.textContent = "Error: " + err.message;
    }
  });
}
