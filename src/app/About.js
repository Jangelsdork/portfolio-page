import Image from "next/image"

export default function Home(){
    return (
        <div id="about" className="about-container">
            <div className="about-container-content"> 
                <Image className="about-avatar" src="/jack.jpg" alt="Jack Mangelsdorf" width="300" height="300" />
                <div className="about-text">Welcome to my little corner of the internet! I&apos;m an aspiring full stack developer with a passion for coding, building bikes, and everything in between. Hailing from the seaside city of Sydney, I&apos;ve made my way to Berlin where I am building full-stack web apps to solve every-day problems. 
                <br></br><br></br>
                    I&apos;m now ready to take these skills into a professional setting and continue to build upon them with the right company. 
                <br></br><br></br>
                    Beyond the code, I am a lover of AFL football and the Sydney Swans, as well as cycling and generally being outdoors.
                     </div>
            </div>
            <div className="about-logos">
                        <Image src="/icons8-javascript-48.png" alt="JS" width="48" height="48" />
                        <Image src="/CSS.png" alt="CSS" width="48" height="48" />
                        <Image src="/HTML.png" alt="HTML" width="48" height="48" />
                        <Image src="/MYSQL-2.png" alt="MYSQL" width="48" height="48" />
                        <Image src="/REACT.png" alt="React" width="48" height="48" />
                        <Image src="/github.png" alt="github" width="48" height="48" />
                     </div>
        </div>
    )
}

