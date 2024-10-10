
export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Divyanshi Digharra',
      position: 'Squad Member at mood Indigo IIT Bombay',
      img: 'assets/review1.jpg',
      review:
        'Working with Akhil was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Krishna Vamshi Akkinepally',
      position: 'Founder of Krishna’s Reality',
      img: 'assets/review2.jpg',
      review:
        'Akhil’s expertise in deep technologies like AI and ML is truly impressive. He delivered a robust and scalable solution for our product, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    
  ];
  
  export const myProjects = [
    {
      title: 'AI Travel Planner app',
      desc: 'AI Travel planner application is a revolutionary Software-as-a-Service platform that transforms the way trips are planned. With advanced AI-powered features like personalized travel recommendations, it allows creators to generate diverse travel plans from text inputs.',
      subdesc:
        'Built as a unique Software-as-a-Service app with React Native, Expo routing, Javascript, Google Gemini AI, Firebase, AI travel planner app is designed to efficiently plan trips around the globe.',
      href: 'https://drive.google.com/file/d/1x8HKD-cT7AGmUHsaRWf3nsMaPXKEauPb/view?usp=drivesdk',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/Airplane.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Gemini AI',
          path: 'assets/Gemini.jpg',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/Javascript.png',
        },
        {
          id: 4,
          name: 'Cloud Firestore',
          path: 'assets/Firebase.png',
        },
      ],
    },
    {
      title: 'Imaginify - AI Photo Manipulation App',
      desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
      subdesc:
        'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
      href: 'https://imaginify-now.vercel.app',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.8px solid #252262',
        boxShadow: '0px 0px 120px 0px #635BFF4D',
      },      
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/Next.jpg',
        },
        {
          id: 2,
          name: 'Cloudinary AI',
          path: 'assets/Cloudinary.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Mongo DB',
          path: '/assets/MongoDB.png',
        },
      ],
    },
    {
      title: 'Snapgram - A Social media application',
      desc: 'This is a fully responsive social media application where users can post their images with captions, descriptions. Users can like and save posts where they can view in their saved page.',
      subdesc:
        'This application is made using ReactJS including shadcn UI for ultimate user experience',
        href: 'https://snapgram-drab.vercel.app',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/gram.jpg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Vite',
          path: 'assets/vite.webp',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Appwrite',
          path: '/assets/appwrite.jpg',
        },
      ],
    },
    {
      title: 'Farmassit - A Smart Farming app',
      desc: 'Farmassist is a smart farming app for IOT and AI-Powered plant disease detection. It is built with Flutter and uses Firebase as its backend',
      subdesc:
        'This application provides real-time monitoring of soil moisture, temperature, humidity, pH and sunlight levels, enhanching precision farming through advanced sensor data',
      texture: '/textures/project/project3.mp4',
      href:'https://github.com/akhilreddy-24/efarm',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Flutter',
          path: '/assets/flutter.jpg',
        },
        {
          id: 2,
          name: 'Tensorflow',
          path: 'assets/tf.png',
        },
        {
          id: 3,
          name: 'Arduino',
          path: '/assets/arduino.jpg',
        },
        {
          id: 4,
          name: 'Cloud Firestore',
          path: 'assets/Firebase.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Mood Indigo IIT Bombay',
      pos: 'Data Science Intern',
      duration: '2023 (2 mos)',
      title:"I explored the field of machine learning and data science by using different algorithms and applied them according to the requirements when working with hands-on projects",
      icon: '/assets/indigo.jpg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Anurag University',
      pos: 'Freelance Software Developer',
      duration: '2022 (10 months)',
      title: "I worked seamlessly with team members and clients, facilitating real-time feedback and iterations in this great journey.",
      icon: '/assets/aun.jpg',
      animation: 'salute',
    },

  ];