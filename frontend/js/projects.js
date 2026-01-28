const projects = [
  {
    title: "Pet Adoption Mobile App (DBIT)",
    description: "Developed a fully functional Android app to simplify the pet adoption process. Users can explore profiles, view details, and adopt pets seamlessly.",
    icon: "fa-solid fa-mobile-screen",
    techStack: ["Android ,", "Java, ", "Firebase, ", "XML"],
    link: "#" // Replace with actual GitHub link
  },
  {
    title: "Spiritual Aura (DBIT)",
    description: "A responsive meditation website focused on mental well-being. Features motivational thoughts, a meditation timer, and guided pranayama sessions.",
    icon: "fa-solid fa-laptop-code",
    techStack: ["HTML, ", "CSS, ", "JavaScript, ", "Firebase"],
    link: "#"
  },
  {
  title: "Smart Contract Wallet",
  description: "A secure multi-signature Ethereum wallet with web interface. Features multi-owner approvals, transaction management, and real-time blockchain interactions.",
  icon: "fa-solid fa-wallet",
  techStack: ["Solidity, ", "Hardhat, ", "Web3.js, ", "Ethereum"],
  link: "https://github.com/vikas-bhagat233/smart-contract-wallet.git"
},
  {
    title: "AI Portfolio Website",
    description: "A full-stack portfolio with an integrated AI chatbot using Groq Cloud. The bot answers questions about my skills and projects in real-time.",
    icon: "fa-solid fa-robot",
    techStack: ["Node.js, ", "MongoDB, ", "Groq Cloud,", "AI"],
    link: "https://github.com/vikas-bhagat233/portfolio-chatbot.git"
  }
];

const container = document.getElementById("projects-container");

// Clear existing content (optional, but good practice)
if (container) container.innerHTML = "";

if (container) {
  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project-card";

    const tagsHTML = project.techStack
      .map(tag => `<span class="tech-tag">${tag}</span>`)
      .join("");

    div.innerHTML = `
      <div class="card-header">
        <i class="${project.icon}"></i>
      </div>
      <div class="card-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        
        <div class="tech-stack">
          ${tagsHTML}
        </div>

        <div class="card-links">
          <a href="${project.link}" class="icon-link" target="_blank">
            <i class="fa-brands fa-github"></i> Source Code
          </a>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}

// --- Education Section (3 items) ---
const education = [
  {
    degree: "Bachelor’s Degree (B.Tech / BE)",
    institute: "Don Bosco Institute Of Technology, Mumbai",
    period: "2023 – 2027",
    highlights: ["Relevant coursework : Computer Engineering", "CGPA/Percentage : -"]
  },
  {
    degree: "Higher Secondary (Class XII)",
    institute: "SMT. CHM College, Ulhasnagar",
    period: "2021 – 2023",
    highlights: ["Stream : Science", "Score :86.67%"]
  },
  {
    degree: "Secondary (Class X)",
    institute: "Fatima High School, Badlapur",
    period: "2009 – 2021",
    highlights: ["Score : 95.4%"]
  }
];

const educationContainer = document.getElementById("education-container");
if (educationContainer) {
  educationContainer.innerHTML = "";

  education.forEach(ed => {
    const card = document.createElement("div");
    card.className = "edu-card";

    const highlightsHTML = (ed.highlights || [])
      .map(item => `<li>${item}</li>`)
      .join("");

    card.innerHTML = `
      <div class="edu-header">
        <div class="edu-degree">${ed.degree}</div>
        <div class="edu-period">${ed.period}</div>
      </div>
      <div class="edu-school">${ed.institute}</div>
      ${highlightsHTML ? `<ul class="edu-details">${highlightsHTML}</ul>` : ""}
    `;

    educationContainer.appendChild(card);
  });
}