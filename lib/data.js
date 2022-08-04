//https://html-css-js.com/html/character-codes/icons/

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
    },{
        name : "My Learning Journeys",
        id : "#my-learning-journey"
    },
    {
        name : "FAQs",
        id:"#faqs"
    }
] 

export const learningJourneys = [
    {
        periode : "26 Januari 2022 - Sekarang",
        constitution : "SIGMATECH (IT Consultan in PT Astra International Tbk.)",
        activities : [
            "Aplikasi TMS (Transportation Management System) --> Project Approval : Build feature approval truck (nopol registration) that will do the delivery of the motorbike.",
            "Aplikasi TMS --> Project GPS : Build feuture report for tracking truck that will do the delivery of the motorbike",
            "Aplikasi Avacado --> Project User Management : Build feature usermanagement that maintain (search/add/edit) user role and user master"
        ],
        note : [
            "TMS (Transportation Management System",
        ]
    },
    {
        periode :"11 September 2011 - 11 Desember 2021",
        constitution :"PT Dymbways Indonesia Teknologi (Remote)",
        activities : [
            "3 month learning about being decipline fullstack developer using MERN (MySQL, Express, React and Node js) and many libaray to improve usability of the website such as multer, jsonwebtoken, bcrypt, and etc."
        ]
    },
    {
        periode : "15 Februari 2021 - 15 Juli 2021",
        constitution:"Bangkit Academy",
        activities : [
            "5 month Learning and practicing how to use and manage various features on the Google Cloud Platform"
        ]
    },
    {
        periode : "29 Mei 2020-31 Juli 2020",
        constitution:"Lembaga Ilmu Pengetahuan Indonesia",
        activities : [
            "Comparing the level of efficiency and speed of computational algorithms using the Monte Carlo method (Metropolis-Hasting algorithm), the quadratic matrix method and the Feynman path integral method when applied in the realm of the quantum world using the python programming language."
        ]
    },
    {
        periode : "2017-2021",
        constitution : "Universitas Negeri Malang",
        activities : [
            "PPA scholarship recipients for 2018-2019 period.",
            "PPA scholarship recipients for 2019-2020 period.",
            "Adora scholarship recipients for 2020-2021 period."
        ]
    },
    {
        periode : "2014-2017",
        constitution : "SMA Nurul Jadid",
        activities : [
            "1st Winner of the National Physics Olympiad Probolinggo Regency (OSK).",
            "Outstanding Student of SMA Nurul Jadid in the 2016-2017 school year.",
            "1st place in the Science Creativity Program held by the superior class of SMA Nurul Jadid girls in 2016."
        ]
    },
]

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
        name : "Redux / Redux Toolkit",
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
        name : "Mongodb / Mongoose",
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

export const dataFAQs = [
    {
        question : "What is my strength",
        answears : [
            `Saya tidak pernah berhenti belajar dan selalu mengupgrade skill saya`,
            `Saya suka rithme kerja yang sat set sat set`,
            `Saya welcome terhadap kritik karena saya ingin berkembang menjadi lebih baik dan lebih profesional di bidang saya`,
            `Saya mudah memaafkan`,
            `Saya adalah orang yang santai tapi jika saya melihat prospek karir yang bagus di lingkungan yang nyaman saya akan menjadi ambisius`,
            `Saya orang yang ikhlas ketika dimarahi atasan karena saya tau itu demi kebaikan saya`
        ]
    }, 
    {
        question : "What is my weakness",
        answears : [
            `Saya sering merasa minder ketika disuatu project bagian pekerjaan saya dianggap 
            tidak terlalu penting dan terkesan mudah, kesan ini menyebabkan saya enggan (bukan berarti tidak sama sekali) 
            untuk memberi masukan terhadap project tersebut.`,
            `Saya sering memiliki beberapa masukan terhadap team saya, namun
            terkadang saya tidak bisa menyampaikannya hal tersebut karena saya tidak punya hak/otoritas atas hal tersebut.`,
            `Saya sering merasa takut utuk menyakiti hati orang lain ketika saya berusaha memberi masukan.`,
            `Saya butuh kepercayaan dari atasan agar saya bisa memberikan kemampuan terbaik saya`,
            `Saya mudah lupa jadi saya sering melakukan googling`,
            `Saya butuh waktu untuk memahami sesautu misalkan suatu project yang sudah ada dimana saya ditugaskan di project tersebut`,

        ]
    },
    {
        question : "What i expect from a place where i work",
        answears : [
            "Jadwal kerja yang terature dan jelas sehingga tidak bingung untuk mengerjakan apa setiap harinya",
            "Team yang menghargai hasil kerja setiap angotanya",
            "Team work yang solid",
            "Senior yang bisa membimbing dan menjadi tempat bertanya",
            "Kritik yang membangun"
        ]
    }
]


/*
    My weakness:
    - Saya sering merasa minder ketika disuatu project bagian pekerjaan saya dianggap 
      tidak terlalu penting dan terkesan mudah, kesan ini menyebabkan saya enggan (bukan berarti tidak sama sekali) 
      untuk memberi masukan terhadap project tersebut.
    - Saya sering memiliki beberapa masukan terhadap team saya, namun
      terkadang saya tidak bisa menyampaikannya hal tersebut karena saya tidak punya hak/otoritas atas hal tersebut.
    - Saya sering merasa takut utuk menyakiti hati orang lain ketika saya berusaha memberi masukan.
    - Saya butuh kepercayaan dari atasan agar saya bisa memberikan kemampuan terbaik saya

    My strength :
    - Saya tidak pernah berhenti belajar dan selalu mengupgrade skill saya
    - Saya welcome terhadap kritik karena saya ingin berkembang menjadi lebih baik dan lebih profesional di bidang saya
    - Saya mudah memaafkan
    - Saya adalah orang yang santai 
    - Jika saya mwlihat prospek karir yang bagus saya akan menjadi ambisius tapi jika tidak saya akan menjadi orang yang santai
    
    What i expect from a place where i work :
    - Jadwal kerja yang terature dan jelas sehingga tidak bingung untuk mengerjakan apa setiap harinya
    - Team yang menghargai hasil kerja setiap angotanya
    - Team work yang solid
    - Senior yang bisa membimbing dan menjadi tempat bertanya
    - Kritik yang membangun
    
    *
     Menjadi seorang junior developer, orang yang berasal dari jurusan yang bukan IT dan ditambah saya adalah seorang perempuan tidak berarti harus diremehkan, 
     saya sadar ilmu saya sebagai seorang ynag baru berkecimpung di dunia IT tidak se expert mereka yang sudah lama di dunia ini,
     tapi saya mau untuk mengejar ketertinngalan saya dan membuat saya sejajar dengan mereka para senior huhuhu ^_^
     Junior--->Senior--->Team Lead--->CTO yok bisa yok
     *
*/ 