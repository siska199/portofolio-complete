export const menu = [
    {
        name:"Introduction",
        id : "#introduction"
    },{
        name:"About Me",
        id : "#about-me"
    },{
        name : "My Skills",
        id : "#my-skills"
    },{
        name : "My Projects",
        id:"#my-projects"
    }
] 
//https://html-css-js.com/html/character-codes/icons/
export const forntendSkills = [
    {
        name : "React / Next JS",
        tingkat : "intermediet"
    },
    {
        name : "HTML",
        tingkat : "intermediet"
    },
    {
        name : "CSS",
        tingkat : "intermediet"
    },
    {
        name : "Javascript",
        tingkat : "intermediet"
    },
    {
        name : "Tailwind",
        tingkat : "intermediet"
    },
    {
        name : "Bootstrap",
        tingkat : "intermediet"
    },
    {
        name : "Styled Component",
        tingkat : "intermediet"
    },
    {
        name : "Redux/Redux Toolkit",
        tingkat : "intermediet"
    },
    {
        name : "Git",
        tingkat : "intermediet"
    },
    {
        name : "JQUERY",
        tingkat : "basic"
    },
    {
        name : "PHP",
        tingkat : "ongoing"
    },
    {
        name : "Vue",
        tingkat : "ongoing"
    }
]

export const backendSkills = [
    {
        name : "Express JS",
        tingkat : "intermediet"
    },
    {
        name : "Firebase",
        tingkat : "intermediet"
    },
    {
        name : "Mongodb/Mongoose",
        tingkat : "intermediet"
    },    {
        name : "MySQL",
        tingkat : "intermediet"
    },
    {
        name : "ORM (sequelize)",
        tingkat : "intermediet"
    },
    {
        name : "GRAPHQL",
        tingkat : "intermediet"
    },
    {
        name : "HAPI",
        tingkat : "basic"
    }
]

export const projectSkills = [
    {
        tittle : "DeweTour Website",
        nameApp: "DeweTour",
        imgApp: "projects/dewetour/cover.PNG",
        logoApp:"projects/dewetour/logo.png",
        stacks : [
            {
                name :"React",
                image:"stacks/react.webp"
            },{
                name :"Bootstrap",
                image:"stacks/bootstrap.png"
            },
            {
                name :"Express",
                image:"stacks/express.png"
            },
            {
                name :"MySQL (with sequelize)",
                image:"stacks/mysql.png"
            }
        ],
        detailApp :`The DeweTour app is the first fullstack app I made to fulfill a task while joining dumbways bootcamp.
                    This application is made using react js as a frontend library, bootstrap as a css framework, react context as state management, express js
                    as the backend framework, and MySQL as the database. I also use some libraries to help build this website
                    such as axios, react-icos, react-context and sweetalert2 for the frontend and cloudinary, jsonwebtoken, bcrypt, and multer for the backend.
        `,
        linkGithub  :"https://github.com/siska199?tab=repositories&q=dewe&type=&language=&sort=",
        linkDemo    : "https://dewetour199.vercel.app/"
    },
    {
        tittle : "Literature Website",
        nameApp: "literature",
        imgApp: "projects/literature/cover.PNG",
        logoApp:"projects/literature/logo.png",
        stacks : [
            {
                name :"React",
                image:"stacks/react.webp"
            },{
                name :"Bootstrap",
                image:"stacks/bootstrap.png"
            },
            {
                name :"Express",
                image:"stacks/express.png"
            },
            {
                name :"MySQL (with sequelize)",
                image:"stacks/mysql.png"
            }
        ],
        detailApp :`Literature app is a fullstack application that i made to fulfill the final project of the dumbways bootcamp.
                    This application is made using react js as a frontend library, bootstrap as a css framework, react context as state management, express js
                    as the backend framework, and MySQL as the database. I also use some libraries to help build this website
                    such as axios, react-pdf, react-icos, and sweetalert2 for the frontend and cloudinary, jsonwebtoken, bcrypt, and multer for the backend.
                    In this application I added a chat system using socket.io, unfortunately when it was deployed to production
                    this feature does not work.
        `,
        linkGithub :"https://github.com/siska199?tab=repositories&q=literature&type=&language=&sort=",
        linkDemo : "https://literature199.vercel.app/"
    },
    {
        tittle : "Clone Instagram",
        nameApp: "clone-instagram-199",
        imgApp: "projects/clone-instagram/cover.PNG",
        logoApp:"projects/clone-instagram/logo.png",
        stacks : [
            {
                name :"Next and NextAuth",
                image:"stacks/nextjs.png"
            },{
                name :"Tailwind",
                image:"stacks/tailwind.png"
            },
            {
                name :"Redux",
                image:"stacks/redux.png"
            },
            {
                name :"Firebase",
                image:"stacks/firebase.png"
            }
        ],
        detailApp :`Clone instagram is the first application I made with the aim of learning the Next JS framework and tailwind css.
                    In this application i also use redux as state management but the reason why i use redux in this app just to recall my 
                    memory and understanding about how to use konvensional redux and the last is i use firebase as the database. The authentication system used is 
                    NextAuth with Google as the provider. Unfortunately for now, the clone-instagram-199 application can only add posts, likes and comments.
                    Libraries used to help build this application include emoji-picker-react, react-icons and redux-thunk.
        `,
        linkGithub :"https://github.com/siska199/clone-instagram",
        linkDemo : "https://clone-ig199.vercel.app/"

    },
    {
        tittle : "Clone Foody",
        nameApp: "clone-Foody-199",
        imgApp: "projects/clone-foody/cover.PNG",
        logoApp:"projects/clone-foody/logo.png",
        stacks : [
            {
                name :"Next and NextAuth",
                image:"stacks/nextjs.png"
            },{
                name :"Tailwind",
                image:"stacks/tailwind.png"
            },
            {
                name :"Redux Toolkit",
                image:"stacks/redux.png"
            },
            {
                name :"Firebase",
                image:"stacks/firebase.png"
            }
        ],
        detailApp :`The foody clone application is an application that I made with the aim of sharpening my knowledge about NextAuth which I previously applied in the clone-instagram application.
                    This application is also was created with the aim of learning the redux toolkit. Surely, this application is made using NextJS as a frontend framework and
                    using firebase as the database. The libraries used to help build this website include react-icons and framer-motion.
        `,
        linkGithub  : "https://github.com/siska199/foody-app",
        linkDemo    :"https://clone-foody-app199.vercel.app/"
    },
    {
        tittle : "Clone Twitter",
        nameApp: "clone-twitter-199",
        imgApp: "projects/clone-twitter/cover.PNG",
        logoApp:"projects/clone-twitter/logo.png",
        stacks : [
            {
                name :"Next and NextAuth",
                image:"stacks/nextjs.png"
            },{
                name :"Tailwind",
                image:"stacks/tailwind.png"
            },
            {
                name :"Redux Toolkit",
                image:"stacks/redux.png"
            },
            {
                name :"MongoDb",
                image:"stacks/mongodb.png"
            }
        ],
        detailApp :`The clone twitter application is an application that I made with the aim of learning the mongodb database (using mongoose)
                    and also made with the aim of deepening my skills when using tailwind as a css framework. In this app
                    I use Next JS as the frontend framework and Nextauth as the authentication system with Google as the provider. For management
                    state in this application I use the Redux toolkit which is much easier to use than conventional redux.
                    Libraries used to help build this application include lottie-react, react-icons, adn react-time-ago.
        `,
        linkGithub : "https://github.com/siska199/clone-twitter-app",
        linkDemo :"https://clone-twitter199.vercel.app/"
    },
]