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
                name="Colours - the Chroma-Tique" 
                description={"Welcome to Colours, your one-stop online shop for all your colourful needs! Our vibrant virtual store was meticulously crafted as an exemplary React project, showcasing the seamless fusion of design and functionality."} 
                techs={""}
                img={"/colours.png"} 
                link={"https://github.com/Jangelsdork/shopping-cart"}/>
            <ProjectCard 
                name="Colour Conundrum" 
                description={"An exercise in React state - a simple memory game where one must avoid clicking the same colour twice."} 
                techs={""}
                img={"/memory.png"} 
                link={"https://github.com/Jangelsdork/memory-game"}/>
        </div>
    )
}