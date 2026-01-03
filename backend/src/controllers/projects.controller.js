export const getProjects = (req, res) => {
  res.json([
    {
      title: "Pet Adoption Mobile App",
      description: "Flutter app with Firebase backend",
      tech: "Flutter, Firebase",
      year: 2025
    },
    {
      title: "Spiritual Aura",
      description: "Meditation & wellness website",
      tech: "HTML, CSS, JavaScript",
      year: 2024
    },
    {
      title: "Portfolio Website",
      description: "Full-stack portfolio with backend APIs",
      tech: "Node.js, MongoDB",
      year: 2025
    }
  ]);
};
