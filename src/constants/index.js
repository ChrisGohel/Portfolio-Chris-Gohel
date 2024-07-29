import project1 from "../assets/projects/Laser.png";
import project2 from "../assets/projects/EPIC.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/Hand-Detection-Project.png";
import project5 from "../assets/projects/cuppic.png";

export const HERO_CONTENT = `I am a dedicated mechanical engineer with extensive program management experience, specializing in developing and optimizing complex systems and processes. With a strong background in mechanical design and project leadership, I have successfully delivered innovative solutions in high-pressure environments, including my recent tenure at Tesla. My expertise encompasses designing efficient manufacturing processes, conducting detailed data analysis, and driving continuous improvement initiatives. My goal is to leverage my technical proficiency and leadership skills to propel engineering projects forward, enhance operational efficiency, and contribute to groundbreaking advancements in the industry.`;

export const ABOUT_TEXT = `I am a versatile mechanical engineer with a passion for mechanical design, process optimization, and data analysis. With extensive experience in Computer-Aided Design (CAD) using tools like SolidWorks, AutoCAD, and CATIA, I have successfully designed and optimized complex systems. My technical skill set also includes programming in Java and Python, as well as working with database languages such as PostgreSQL and MySQL. My journey in engineering began with a deep curiosity for how things work, which has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of work, I enjoy staying active, exploring new technologies, and traveling.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2024",
    role: "Mechanical Engineer",
    company: "Samsung Austin Semiconductor",
    description: `Worked with a team of four engineers to design and manufacture a device to measure Laser Power Density of a pulsed optical laser inside Semiconductor Metrology equipment and transmit data wirelessly through bluetooth BLE to handheld device with an inbuilt software application.`,
    technologies: ["EasyEDA", "Excel", "Java", "Solidworks"],
  },
  {
    year: "2023 - 2023",
    role: "Technical Program Manager - Fastener Engineering",
    company: "Tesla",
    description: `Manage Joint Design, Validation, and Reporting Processes for multiple Vehicle Programs, performed gap analysis and defined workflows for validation, design, and testing; created KPI dashboards; developed joining strategy; conducted strategic reviews; and automated joint design ticket creation from CAD insights.`,
    technologies: ["Enovia", "Macros", "MySql", "Jira"],
  },
  {
    year: "2023 - 2023",
    role: "Technical Program Manager - New Product Introduction",
    company: "Tesla",
    description: `Validated system and parts for inverter development, aligned cross-functional teams, developed program schedules, set validation standards, managed engineering techs, and executed manufacturing trials for design, process, equipment, and supplier changes.`,
    technologies: ["Excel", "Jira", "JMP", "MySql"],
  },
  {
    year: "2022 - 2022",
    role: "Technical Program Manager",
    company: "Econtrols",
    description: `Managed new product development for Engine Control Modules and Regulators, prioritized manufacturing efforts, allocated parts for multiple customers, and resolved quality issues through root cause analysis.`,
    technologies: ["Excel", "PLM Software", "CRM Software"],
  },
];

export const PROJECTS = [
  {
    title: "Laser Power Density Measurement Device",
    image: project1,
    description:
      "Developed a comprehensive device to accurately measure the laser power density from a pulsed optical laser used in semiconductor inspection processes.",
    technologies: ["EasyEDA", "Excel", "Java", "Solidworks"],
  },
  {
    title: "Automating Joint Design Ticket Creation",
    image: project2,
    description:
      "Developed a model to automate Joint Design Ticket creation with CAD Data extracted from Enovia, Audit and correct existing JIRA tickets",
    technologies: ["Enovia", "Jira", "JQL", "Macros"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Hand Gesture Recognition to Control Virtual Robot",
    image: project4,
    description:
      "Developed a system to capture real-time video feed, decipher hand signs, and command a virtual bot by training a model with user hand signs, ensuring accuracy through distance and error matrices.",
    technologies: ["Gazebo Simulation", "MediaPipe", "OpenCV CV2", "ROS2 w/ RCLPY" ],
  },
  {
    title: "Automated Water Cup Instrument",
    image: project5,
    description:
      "Utilized CAD modeling, iterative prototyping, and extensive testing, designed and developed an automated water glass instrument to enhance musical education for elementary schools ",
    technologies: ["Arduino", "Solidworks", ],
  },
];

export const CONTACT = {
  address: "7019 Water Glen Lane, 77578, Manvel, TX ",
  phoneNo: "832-231-1970 ",
  email: "chrisgohel1@gmail.com",
};
