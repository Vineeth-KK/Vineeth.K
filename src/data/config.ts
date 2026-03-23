const config = {
  title: "Vineeth K | Developer Portfolio",
  description: {
    long: "Explore the portfolio of Vineeth K, an aspiring developer skilled in Python, C++, and Web Development. Discover my latest projects, skills, and academic achievements. Let's build something amazing together!",
    short:
      "Discover the portfolio of Vineeth K, a developer creating interactive experiences and innovative projects.",
  },
  keywords: [
    "Vineeth K",
    "Vineeth",
    "portfolio",
    "developer",
    "C++",
    "Python",
    "Web Development",
    "Machine Learning",
    "PyTorch",
    "Scikit-learn",
  ],
  author: "Vineeth K",
  role: "Aspiring Developer",
  email: "vineeth2005k@gmail.com",
  site: "https://vineethk.site",
  resume: "https://drive.google.com/file/d/1JHGKJkuCGF73qjbJAO2vwYjUpvuJcdT9/view?usp=sharing",

  // for github stars button
  githubUsername: "Vineeth-KK",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/vineeth~k/",
    instagram: "",
    facebook: "",
    github: "https://github.com/Vineeth-KK",
    phone: "+91-9744630175",
  },
};
export { config };
