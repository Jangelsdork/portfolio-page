import ProjectCard from './ProjectCard'

export default function Projects(){
    return (
        <div id="projects"className="projects-container">
            <ProjectCard 
                name="European Booking Agencies Incident Report Register" 
                description={"A work-in-progress for the European Music Booking Agencies association to register bad actors in the industry. The platform allows approved persons to add incident reports, as well as search existing reports. Built with React, it utilises a PlanetScale (MySQL) database & Clerk authentication."} 
                techs={""}
                img={"/EBAIRR.png"} 
                link={"https://github.com/Jangelsdork/blacklist-nextjs"}
                linkLive={"https://blacklist-nextjs.vercel.app/"}/>
            <ProjectCard 
                name="AFL Score Keeping Tool" 
                description={"Australian Rules Football is a game with an atypical scoring system, with major and minor scores. Most teams also tend to keep diligent stats on goal kicker. I created this app after suffering through a game of punching numbers and quick notes into my phone, only to find at the end of the game that none of the notes match with the other umpires. It was also an opportunity to pracitce and familiarise myself with Typescript and Tailwind"} 
                techs={""}
                img={"/Scorekeeper.png"} 
                link={"https://github.com/Jangelsdork/afl-scorer"}
                linkLive={"https://afl-scorer.vercel.app/"}
                />
                
            <ProjectCard 
                name="Colour Conundrum" 
                description={"An exercise in React state - a simple memory game where one must avoid clicking the same colour twice."} 
                techs={""}
                img={"/memory.png"} 
                link={"https://github.com/Jangelsdork/memory-game"}
                linkLive={"https://jangelsdork.github.io/memory-game/"}
                />
        </div>
    )
}