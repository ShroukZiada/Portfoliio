/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shrouk Ziada",
  title: "Hi all, I'm Shrouk",
  subTitle: emoji(
    "A Front - End Developer 🚀 experienced in building responsive web applications using Angular and JavaScript.I have worked on ERP systems, developing modules for customer management, inventory, sales, and invoicing, with a focus on creating clean, efficient, and user- friendly interfaces."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShroukZiada",
  linkedin: "linkedin.com/in/shroukziada",
  gmail: "shroukziada51@gmail.com",
  facebook: "https://www.facebook.com/share/1A7Kd3v1bx/",


  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Front-End Developer passionate about building clean and efficient business web applications",
  skills: [
    emoji(
      "⚡ Develop interactive Front-End interfaces for web applications using Angular and TypeScript"
    ),
    emoji(
      "⚡ Build modules for ERP systems including Customer Management, Inventory, Sales, and Invoicing"
    ),
    emoji(
      "⚡ Create responsive and user-friendly web applications, integrating APIs and services for business operations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Giza Institute",
      logo: require("./assets/images/5.jpg"),
      subHeader: "Bachelor of Business Information Systems",
      duration: "September 2017 - July 2021",
      desc: "Graduated among the top 10% of the program, combining technical skills in web development with business knowledge in accounting, marketing, and management.", descBullets: [
        "Built practical projects in Angular and JavaScript, focusing on responsive and user-friendly interfaces",
        "Developed ERP system modules including Customer Management, Inventory, Sales, and Invoicing",
        "Learned database design and SQL for efficient business operations",
        "Gained solid understanding of business processes through courses in Accounting, Marketing, and Business Management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend",
      progressPercentage: "35%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Angular Developer",
      company: "RateMah ",
      companylogo: require("./assets/images/ratemahhomeLogo.png"),
      date: "Oct 2024 – Dec 2024",
      desc: "Front-End Developer building responsive and interactive web applications using Angular.",
      descBullets: [
        "Implemented designs provided by UX/UI designers, ensuring pixel-perfect, responsive interfaces using Angular and CSS3.",
        "Collaborated with backend developers to integrate Angular components with REST APIs.",
        "Optimized application performance and ensured cross-browser compatibility for smooth user experience."
      ]
    },
    {
      role: "ERP Developer",
      company: "Business Eco Systems",
      companylogo: require("./assets/images/ecobg.png"),
      date: "Feb 2025 – Present",
      desc: "ERP Developer responsible for designing, developing, and maintaining business applications. Focused on creating efficient modules for inventory, sales, invoicing, and customer management, ensuring smooth integration with backend systems and a user-friendly experience.",
      descBullets: [
        "Developed ERP modules for Inventory, Sales, Invoicing, and Customer Management using Angular, TypeScript, and SQL.",
        "Integrated frontend components with backend systems and REST APIs for seamless data flow.",
        "Optimized application performance and enhanced usability for end users.",
        "Collaborated with stakeholders to implement business requirements efficiently."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cashier.jpg"),
      projectName: "Cashiier - ERP System",
      projectDesc: "A comprehensive ERP system designed to manage cashier operations, including sales transactions, invoicing, inventory tracking, and customer management, with a user-friendly interface built using Angular and TypeScript.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/ecobg.png"), // صورة المشروع
      projectName: "ERP 2025",
      projectDesc: "An integrated ERP solution for managing sales, invoicing, inventory, and customer data efficiently. Developed with Angular and TypeScript, offering a clean interface and seamless workflow for daily business operations.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://example.com"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Route IT Training Center ",
      subtitle:
        "Completed a comprehensive Full Stack Development program, gaining hands-on experience in building responsive web applications using Angular, JavaScript, and .NET for back-end development. Learned to design clean, maintainable project architectures and integrate APIs efficiently.",
      image: require("./assets/images/route (1).jpg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1HqBvY6f0p3pV2sAKhhilpEqV2dXKSYIw/view"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        {
          name: "Final Project",
          url: "https://route-e-commerce-seven.vercel.app/login"
        }
      ]
    },
    {
      title: "Front End Developer",
      subtitle: "Completed a 12-week intensive front-end development program, gaining hands-on experience with HTML, CSS, TypeScript, and Angular. Built responsive and user-friendly web applications while working with Git and modern development tools on real-world projects.",
      image: require("./assets/images/upskilling.jpg"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://shroukziada.github.io/foodie/"
        }
      ]
    },
    {
      title: "Self Study",
      subtitle: "Dedicated to continuous learning through self-study, exploring modern web development technologies and best practices. Built multiple projects using Angular and JavaScript, focusing on creating responsive and user-friendly web applications.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      // imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Self-Study Project",
          url: "https://crud-gamma-seven.vercel.app/"
        }
      ]
    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://en.wikipedia.org/wiki/Enterprise_resource_planning",
      title: "Understanding ERP Systems in Modern Businesses",
      description:
        "ERP systems help businesses manage operations such as inventory, sales, invoicing, and customer management through integrated applications that improve efficiency and data flow."
    },
    {
      url: "https://angular.io/",
      title: "Building Modern Web Applications with Angular",
      description:
        "Angular is a powerful front-end framework used to build dynamic and scalable web applications. It provides features like two-way data binding, component-based architecture, and dependency injection to create efficient and maintainable user interfaces."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: emoji("Let's Work Together 🚀"),
  number: "02-01152344716", // Set with your phone number
  email_address: "shroukziada51@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
