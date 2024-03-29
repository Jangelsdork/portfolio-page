import ProjectCard from './ProjectCard'

export default function Projects(){
    return (
        <div id="projects"className="projects-container">
            <ProjectCard 
                name="Record label website" 
                description={"A homepage for a small independent record label built with React. Technologies used include Typescript, zod (for validating the contact form), react-hook-form, resend, and tailwind."} 
                techs={""}
                img={"/q1e2.png"} 
                link={"https://github.com/Jangelsdork/q1e2-website"}
                linkLive={"https://q1e2.nl/"}
                />
                 <ProjectCard 
                name="Bar Landing Page" 
                description={"A landing page for a local business who desired a simple web presence to introduce customers to their business. It uses google places API to fetch opening hours, to simplify maintenance."} 
                techs={""}
                img={"/gensyn.png"} 
                link={"https://github.com/Jangelsdork/gensyn-landing-page"}
                linkLive={"https://gensyn-landing-page.vercel.app/"}
                />
            <ProjectCard 
                name="Exercise finder" 
                description={"This simple app helps you quickly and easily find new exercises for your strength workouts. The app queries the WGER exercise database REST API."} 
                techs={""}
                img={"/exercise-app.png"} 
                link={"https://github.com/Jangelsdork/exercise-app"}
                linkLive={"https://exercise-app-flax.vercel.app/"}
                />
            
        </div>
    )
}