import ProjectCard from './ProjectCard'

export default function Projects(){
    return (
        <div id="projects"className="projects-container">
            <ProjectCard 
                name="Restaurant Reservation App" 
                description={"This is a demonstration of a reservation app that I am developing for an external project. It involves a form where guests can make reservations, as well as a back end where venues can view and manage bookings. The form is validated using Zod, and is optimised for mobile, while the dashboard (/dashboard) uses style elements (such as a data table) from Shadcn ui library."} 
                techs={""}
                img={"/reservation.png"} 
                link={"https://github.com/Jangelsdork/reservation-app-guest"}
                linkLive={"https://reservation-app-guest.vercel.app/"}
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
                description={"This simple app helps you quickly and easily find new exercises for your strength workouts. The app queries the WGER exercise database REST API An exercise in React state - a simple memory game where one must avoid clicking the same colour twice."} 
                techs={""}
                img={"/exercise-app.png"} 
                link={"https://github.com/Jangelsdork/exercise-app"}
                linkLive={"https://exercise-app-flax.vercel.app/"}
                />
            <ProjectCard 
                name="European Booking Agencies Incident Report Register" 
                description={"A work-in-progress for the European Music Booking Agencies association to register bad actors in the industry. The platform allows approved persons to add incident reports, as well as search existing reports. Built with React, it utilises a PlanetScale (MySQL) database & Clerk authentication."} 
                techs={""}
                img={"/EBAIRR.png"} 
                link={"https://github.com/Jangelsdork/blacklist-nextjs"}
                linkLive={"https://blacklist-nextjs.vercel.app/"}/>
            <ProjectCard 
                name="AFL Score Keeping Tool" 
                description={"Australian Rules Football is a game with an atypical scoring system, with major and minor scores. Most teams also tend to keep diligent stats on goal kicker. I created this app after suffering through a game of punching numbers and quick notes into my phone, only to find at the end of the game that none of the notes match with the other umpires. It was also an opportunity to practice and familiarise myself with Typescript and Tailwind"} 
                techs={""}
                img={"/Scorekeeper.png"} 
                link={"https://github.com/Jangelsdork/afl-scorer"}
                linkLive={"https://afl-scorer.vercel.app/"}
                />
        </div>
    )
}