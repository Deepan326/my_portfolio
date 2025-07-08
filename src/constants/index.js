import project1 from "../assets/project1.jpeg"
import project2 from "../assets/project2.jpeg"
import project3 from "../assets/project3.jpeg"
import project4 from "../assets/project4.jpeg"
import project5 from "../assets/project5.jpeg"
import project6 from "../assets/project6.jpeg"
import project7 from "../assets/project7.jpeg"


export const HERO_CONTENT = `Full Stack Developer with practical experience building web applications using React.js, Node.js, Express.js, and
MongoDB. Skilled in creating responsive front-end interfaces and integrating efficient back-end services. Committed to
writing clean, maintainable code and collaborating in team environments to deliver user-centered solutions. Currently
enhancing skills in full-stack development through hands-on projects and continuous learning.`;

export const ABOUT_TEXT = `i am dedicated`;

export const CERTIFICATES = [
  { Institute:"WebStack Academy",
      technologies: "Mern Stack development" ,
    year: "2024-present", 
}
];

export const PROJECTS=[
    {title:"Web Calculator",
        image:project1,
        description:"Developed a web-based calculator using HTML, CSS, and JavaScript to perform basic arithmetic operations.The calculator supports addition, subtraction, multiplication, and division, along with features like clearing input, backspace, and result evaluation.",
        technologies:["HTML5, CSS3, JAVASCRIPT,GITHUB"],
         Live:"https://deepan326.github.io/calculator-level-2/"
    },

       {title:"Image Carousel",
        image:project2,
       description: "Developed an interactive image carousel using HTML, CSS, and JavaScript that allows users to navigate through images manually or automatically. The carousel includes navigation buttons, dot indicators, auto-sliding functionality, and a popup viewer for full-screen image display."
        ,technologies:["HTML5, CSS3, JAVASCRIPT,GITHUB"],
         Live:"https://deepan326.github.io/Image-carousel-2/"
    },

       {title:"Music Player",
        image:project3,
        description:"This JavaScript-based music player allows users to play, pause, skip,shuffle, and loop tracks. It features a dynamic playlist, progress bar,volume control, and a modal preview with artist details.",
        technologies:["HTML5, CSS3,JAVASCRIPT,GITHUB"],
         Live:"https://deepan326.github.io/music-player-level-2/"
    },

       {title:"Weather App",
        image:project4,
        description:"Developed a responsive, location-aware weather forecast application using React and the Open-Meteo weather API. The app fetches and displays both hourly and daily weather data based on the user's geolocation or manual search input",
        technologies:["HTML5, CSS3,JAVASCRIPT,REACT"],
         Live:"https://wsa-weatherapp2.netlify.app/"
    },

       {title:"Todo App-(Fullstack project)",
        image:project5,
        description:"This is a simple and responsive To-Do list application built using React and Vite. The primary goal is to allow users to create, view, edit, and delete tasks with a focus on clean UI and intuitive UX.",
        technologies:["HTML5, CSS3, JAVASCRIPT, REACT, NODE, EXPRESS, MONGODB,POSTMAN, GITHUB, NETLIFY, RENDER"],
         Live:"https://wsa-todo-level-1.netlify.app/"
    },

       {title:"Password Tester",
        image:project6,
        description:"This project is a simple and interactive Password Strength Tester built using React. It allows users to enter a password and visually evaluates its strength based on criteria.The strength is displayed via a range slider (progress bar-like), and visual feedback is given for each criterion",
        technologies:["HTML5, CSS3, JAVASCRIPT, REACT, GITHUB, NETLIFY"],
         Live:"https://password-tester-app.netlify.app/"
    },

       {title:"Simple Ecommerce Cart)",
        image:project7,
        description:"This project is a mini e-commerce frontend built using React. It enables users to browse, filter, search, and add products to a shopping cart. The cart is persisted using localStorage and dynamically updates across components using window events",
        technologies:["HTML5,CSS3,JAVASCRIPT,REACT,GITHUB,NETLIFY "],
         Live:"https://ecom-simple-cart.netlify.app/"
    }
]

export const CONTACT={
    address:"7/113 south garden,jadayampalayam(post),Coimbatore-641302",
    MailId:"rdeepan326@gmail.com",
    Contact:"+91 8248405321"
}