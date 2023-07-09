import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    NET,
    html,
    css,
    reactjs,
    PHP,
    tailwind,
    nodejs,
    MySQL,
    git,
    Python,
    docker,
    sumida,
    CFE,
    fabricas_selectas,
    API_REST,
    Social,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: ".NET Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DevOps",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: ".NET",
      icon: NET,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PHP",
      icon: PHP,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: MySQL,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "PHP - PostgreSQL developer",
      company_name: "Sumida Componenst de México",
      icon: sumida,
      iconBg: "#383E56",
      date: "August 2029 - May 2023",
      points: [
        "Developing and maintaining web internal applications using PHP.",
        "Collaborating with cross-functional teams including product managers and other developers to create high-quality products.",
        "Quick adaptation to errors or new functionalities given by the company.",
        "Participate in constant meetings with the project manager to show progress or failures found.",
      ],
    },
    {
      title: "Laravel developer",
      company_name: "CFE (Comisión Federal de Electricidad)",
      icon: CFE,
      iconBg: "#E6DEDD",
      date: "September 2022 - May 2023",
      points: [
        "Collaborate with cross-functional teams to design, implement and maintain new functionalities in Laravel.",
        "Maintain good practices, clean code and security in sensitive user data.",
        "Implement a new module called 'Resguardos' for the finance department.",
        "Manage SCRUM methodology for project deliveries and progress.",
      ],
    },
    {
      title: ".NET Developer",
      company_name: "Fabricas Selectas",
      icon: fabricas_selectas,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Developing and maintaining web applications using ASP.NET and other related technologies.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "API REST.NET",
      description:
        "Creation of an api called villas to be able to consume different endpoints it in the REST.NET technology",
      tags: [
        {
          name: "REST.NET",
          color: "blue-text-gradient",
        },
        {
          name: "SQL SERVER",
          color: "green-text-gradient",
        },
        {
          name: ".NET 7",
          color: "pink-text-gradient",
        },
      ],
      image: API_REST,
      source_code_link: "https://github.com/alan-martinez/API_PROYECT_REST.NET",
    },
    {
      name: "CFE - Servicio social",
      description:
        "Web for the administration of social service providers managed by the CFE company",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: Social,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };