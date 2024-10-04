import Header from "../componnets/1-header/Header"
// import "./About.css"

function About() {
    return <div id="up" className="container">
            <Header />
            <div className="devider"/>
                <div className="about">
                    <h1 className="title">About</h1>
                    <p className="sub-title">Hello, my name is Islam , I'm a self-taught web developer, graduated from ALX Africa scholarship in software engineering with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. </p>
                </div>
            <div className="devider"/>
            <div className="tech">
                <h1 className="title">My Tech Stack</h1>
                <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="tech" className="tech-img"/>
                <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="tech" className="tech-img"/>

            </div >
            <div className="contriputions">
            <div className="devider"/>
                <div>
                    <h1 className="title">My Contriputions</h1>
                    <img src="contriputions.jpg" alt="contriputions"/>
                    <img src="contriputions1.jpg" alt="contriputions1"/>
                </div>
            </div>
            <div className="devider"/>
        </div>
}

export default About

