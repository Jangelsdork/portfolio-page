import Image from "next/image"
import Link from "next/link"

export default function Home(){
    return (
        <div id="about" className="about-container">
            <div className="about-container-content"> 
                <Image className="about-avatar" src="/jack.jpg" alt="Jack Mangelsdorf" width="300" height="300" />
                <div className="about-text">Hey there! I&apos;m a full stack developer with a passion for coding, building bikes, cooking, and sports. 
                <br></br><br></br>
                Hailing from the seaside city of Sydney, I&apos;ve made my way to Berlin where I am building full-stack web apps to solve every-day problems. 
                <br></br><br></br>
            
                    Beyond the code, you&apos;ll find me on weekends playing footy with the Berlin Crocs, out on the bike, or outdoors somewhere having a paddle.
                     </div>
            </div>
            <div className="about-logos">
                        <Image className="icon" src="/icons8-javascript-48.png" alt="JS" width="48" height="48" />
                        <Image className="icon" src="/typescript.png" alt="typescript" width="48" height="48" />
                        <Image className="icon" src="/CSS.png" alt="CSS" width="48" height="48" />
                        <Image className="icon" src="/HTML.png" alt="HTML" width="48" height="48" />
                        <Image className="icon" src="/MYSQL-2.png" alt="MYSQL" width="48" height="48" />
                        <Image className="icon" src="/REACT.png" alt="React" width="48" height="48" />
                        <Image className="icon" src="/github.png" alt="github" width="48" height="48" />
                        <Image className="icon" src="/nextjs.png" alt="nextJS" width="48" height="48" />
                        <Image className="icon" src="/tailwind.png" alt="tailwind" width="48" height="48" />
                     </div>
        </div>
    )
}

