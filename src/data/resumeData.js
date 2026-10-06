export const resumeData = {
  name: "Sahana N",
  title: "Java Full Stack & AI Software Engineer",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9986439176",
  email: "sahana.nn09@gmail.com",
  github: "https://github.com/sahana-nd",
  githubUser: "sahana-nd",
  linkedin: "https://www.linkedin.com/in/sahana-n-418841286/",
  avatar: "./hero_avatar.jpg",
  resumePdf: "./Sahana_Resume.pdf",
  
  summary: "Information Science Engineering graduate with hands-on experience in Java Full Stack Development, RESTful APIs, Spring Boot, MySQL, and React.js, alongside AI & Machine Learning solutions.",

  stats: [
    { label: "Engineering CGPA", value: "7.92 / 10", subtext: "Sri Sairam College of Engg." },
    { label: "Core Projects", value: "3", subtext: "Full-Stack, ML & AI Wearable" },
    { label: "Certifications", value: "2", subtext: "Microsoft Azure & TNSIF Java" },
    { label: "Research Paper", value: "1", subtext: "Published in IRJCS Journal" }
  ],

  coreSkills: [
    { name: "Java", category: "Backend", level: 90, icon: "Code2" },
    { name: "Spring Boot", category: "Backend", level: 88, icon: "Server" },
    { name: "React.js", category: "Frontend", level: 85, icon: "Layout" },
    { name: "REST APIs", category: "Backend", level: 90, icon: "Cpu" },
    { name: "MySQL", category: "Database", level: 85, icon: "Database" },
    { name: "HTML / CSS / JS", category: "Frontend", level: 92, icon: "Globe" },
    { name: "Docker / Linux", category: "DevOps", level: 80, icon: "Container" },
    { name: "Git / GitHub", category: "DevOps", level: 90, icon: "GitBranch" },
    { name: "Azure Fundamentals", category: "Cloud", level: 82, icon: "Cloud" }
  ],

  technicalSkills: [
    "Python", "SQL", "JDBC", "Spring Framework", "Eclipse", "VS Code",
    "Data Structures", "DBMS", "Operating Systems", "Computer Networks", "OOP"
  ],

  education: [
    {
      institution: "Sri Sairam College of Engineering",
      degree: "Bachelor of Engineering – Information Science",
      period: "2022 – 2026",
      cgpa: "7.92 / 10",
      details: "Specialized in Software Engineering, DBMS, Computer Networks, DSA, and Java Full Stack."
    }
  ],

  experience: [
    {
      role: "Java Full Stack Development Intern",
      company: "Cloud Institution",
      location: "Bengaluru, India",
      period: "Feb 2026 – May 2026",
      type: "Internship",
      projectTitle: "Hospital Management System",
      projectImage: "./project_hospital_mgmt.jpg",
      highlights: [
        "Built a full-stack Hospital Management System using Java, Spring Boot, JDBC, MySQL, HTML, CSS, and JavaScript.",
        "Designed REST APIs, role-based authentication modules, appointment booking workflows, and CRUD operations.",
        "Tested backend services using Postman and integrated database connectivity with MySQL.",
        "Worked with Git version control following software development best practices."
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "JDBC", "HTML/CSS", "JavaScript", "Postman", "Git"]
    }
  ],

  projects: [
    {
      id: "smart-eyewear",
      title: "Smart Eyewear for Inclusive Communication",
      category: "AI & Embedded Systems",
      image: "./project_smart_eyewear.jpg",
      description: "AI-powered wearable assistive solution integrating computer vision, speech recognition, gesture detection, and obstacle detection for accessibility.",
      techStack: ["Python", "OpenCV", "TensorFlow", "ESP32", "Speech Recognition", "Computer Vision"],
      keyFeatures: [
        "Real-time obstacle detection & distance warnings with ESP32 & OpenCV.",
        "Speech-to-text overlay for hearing accessibility.",
        "Gesture detection engine for hands-free navigation.",
        "Published in IRJCS Journal (Vol 12, Issue 11)."
      ],
      githubUrl: "https://github.com/sahana-nd/Smart-Eyewear-for-Inclusive-Communication",
      publicationUrl: "https://irjcs.com/volumes/Vol12/iss-11/05.NVCSXI10084.pdf",
      published: true,
      journal: "IRJCS Journal (Vol 12, Issue 11)"
    },
    {
      id: "fraud-detection",
      title: "Credit Card Fraud Detection System",
      category: "Machine Learning / Python",
      image: "./project_fraud_detection.jpg",
      description: "Machine learning model built using Python, Pandas, and Decision Trees to accurately detect fraudulent credit card transactions.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "Decision Trees", "Data Preprocessing", "Model Evaluation"],
      keyFeatures: [
        "Data preprocessing, cleaning, & feature engineering on transaction datasets.",
        "Trained Decision Tree classification model for fraud identification.",
        "Model evaluation to improve prediction accuracy and minimize false positives."
      ],
      githubUrl: "https://github.com/sahana-nd/Credit-Card-Fraud-Detection",
      publicationUrl: null,
      published: false
    }
  ],

  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      badge: "Cloud & Infrastructure",
      description: "Demonstrated knowledge of Azure cloud services, security, storage, networking, and cloud concepts.",
      icon: "Cloud"
    },
    {
      title: "TNS India Foundation (TNSIF) Training",
      issuer: "TNS India Foundation",
      badge: "Java Backend & Soft Skills",
      description: "Intensive training program focused on Java Backend Development, Core Java, OOP, SQL, problem solving, and professional soft skills.",
      icon: "Code2"
    }
  ],

  achievements: [
    {
      title: "Published Research Paper",
      source: "IRJCS Journal (Volume 12, Issue 11)",
      topic: "Smart Eyewear for Inclusive Communication",
      details: "Peer-reviewed research paper on AI wearable assistive tech for accessibility.",
      proofUrl: "https://irjcs.com/volumes/Vol12/iss-11/05.NVCSXI10084.pdf",
      proofText: "View Published PDF Paper"
    },
    {
      title: "Generation Green 2024 Internship",
      source: "Sustainability Outreach",
      topic: "E-Waste Awareness & Environmental Sustainability",
      details: "Promoted environmental sustainability and responsible e-waste management.",
      proofUrl: "https://lnkd.in/p/gNn7ppbX",
      proofText: "View LinkedIn Verification"
    }
  ]
};
