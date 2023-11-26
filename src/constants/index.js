import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,

    mui,
    nextjs,
    nodejs,
    pricewise,
   

    react,
    redux,
    sass,

    snapgram,
    summiz,
    tailwindcss,
    threads,

    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Python Development",
        company_name: "Unicompiler",
        icon: "https://rb.gy/xx22yf",
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developed a Python game engine using Ursina, emphasizing simplicity for game development.",
            "Integrated Ursina seamlessly, harnessing its lightweight design for an accessible and efficient development experience.",
            "Applied Python expertise to implement core functionalities, covering graphics, input handling, and overall game logic.",
            "Prioritized a user-friendly design, ensuring ease of use for developers, especially those new to game development.",
        ],
    },
    {
        title: "Cloud Management",
        company_name: "Google",
        icon: "https://shorturl.at/hvxQR",
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Mar 2022",
        points: [
           "Create a GCP project to organize resources and manage billing.",
           "Set up billing alerts and budgets to monitor usage and costs.",
           "Deploy and manage containerized applications with GKE.Utilize Kubernetes for container orchestration.",
           "Implement Stackdriver Monitoring for real-time visibility into the performance of resources. Utilize Stackdriver Logging for collecting and analyzing logs."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "3s Architecture",
        icon: "https://shorturl.at/ayzAI",
        iconBg: "#a2d2ff",
        date: "Jan 2021 - Apr 2021",
        points: [
        "Set up an Express.js server to handle HTTP requests.Connect to MongoDB for data storage.Implement RESTful API endpoints for CRUD operations.Incorporate middleware for logging, authentication, and error handling."
    ,"Design a MongoDB schema for efficient data storage.Create functions to interact with MongoDB, encapsulating database operations.Consider relationships between entities for a well-structured database."    
    ,"Develop a React application using Create React App or similar tools.Configure Redux to manage the application state efficiently.Integrate with the server-side API for seamless data flow.Implement Redux actions and reducers for predictable state management."
            ,"Ensure smooth integration between the server-side and client-side components.Test the full-stack application for data flow and functionality.Utilize Redux for centralized state management, enhancing the React application's scalability. Optimize and deploy the application for production."
],
    },
];

export const socialLinks = [

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/amaygit',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/amay-nayak-6185871a2/',
    }
];

export const projects = [
    {
        iconUrl: 'https://shorturl.at/qZ058',
        theme: 'btn-back-red',
        name: 'Fake product detection using blockchain technology',
        description: "Developing a system for fake product detection involves integrating QR codes to provide users with instant access to product information while leveraging blockchain technology for an immutable and decentralized ledger. By embedding unique details in QR codes and utilizing smart contracts on the blockchain, the system ensures secure product verification, minimizing the risk of counterfeit products in the supply chain.",
        link: 'https://github.com/amaygit/Fake_Product_Detection_QR_Amay',
    },
    {
        iconUrl: "https://shorturl.at/vyBCX",
        theme: 'btn-back-green',
        name: 'tinder-using-blockchain',
        description: 'Creating a Tinder-inspired decentralized dating platform involves harnessing blockchain technology to prioritize user privacy, security, and transparency. By utilizing blockchain for identity management and storing interaction histories, the platform ensures secure and verifiable user data. Implementing a token economy and smart contracts enhances user incentives and safety measures, fostering a trustworthy and innovative dating experience.',
        link: 'https://github.com/amaygit/tinder-using-blockchains',
    },
    {
        iconUrl: "https://shorturl.at/pGMNO",
        theme: 'btn-back-blue',
        name: 'Developing an AI Companion with PlanetScaler',
        description: 'Creating an AI companion using PlanetScaler involves leveraging its advanced artificial intelligence capabilities to build a personalized and responsive companion. By harnessing PlanetScalers machine learning algorithms, the companion can adapt to user preferences, understand context, and provide intelligent responses. Integrating natural language processing enables seamless communication, making the AI companion a dynamic and intuitive entity. Additionally, PlanetScalers scalability allows for continuous learning and improvement, ensuring the AI companion evolves alongside user interactions, providing a sophisticated and engaging user experience.',
        link: 'https://github.com/amaygit/amay',
    },
       {
        iconUrl: "https://shorturl.at/lxABD",
        theme: 'btn-back-black',
        name: 'Building a Minecraft Game with Python and Ursina Game Engine',
        description: 'Developing a Minecraft-style game using Python and the Ursina game engine involves leveraging Ursinas simplicity and versatility. Utilizing Ursinas 3D graphics capabilities, the game can feature a block-based world with customizable terrain. Implementing Python for game logic allows for easy scripting and interaction design. Leveraging Ursinas built-in features, such as entity management and physics, simplifies the creation of the games environment and mechanics',
        link: 'https://vercel.com/amaygit/minecraft',
    },
    {
        iconUrl:"https://shorturl.at/agzTU",
        theme: 'btn-back-yellow',
        name: 'Building a Real-Time Chat App with Next.js',
        description: 'Creating a real-time chat application using Next.js provides a modern and efficient approach to web development. Leveraging Next.js for server-side rendering and routing, the app ensures optimal performance and SEO friendliness. Integrating WebSocket technology enables real-time communication between users. The dynamic nature of Next.js allows for seamless updates and rendering of new messages without full-page reloads. ',
        link: 'https://github.com/amaygit/myChat',
    }
];