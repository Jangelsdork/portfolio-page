import Image from "next/image"
import Link from "next/link"

export default function Projects( { name, description, techs, img, link, linkLive } ){

    function LinkLive() {
        if(linkLive) {
            return <Link className="card-link" href={linkLive}>Live //&nbsp;</Link>
        }
    }

    return (
        <div className="project-card">
            <div className="card-title">{name}</div>
            <div className="card-description">{description}</div>
            <div className="card-tech">{techs}</div>
            <Image className="card-img" unoptimized={true} src={img} alt="website sample image" height={416} width={604}></Image>
           <div className="card-links">
                <LinkLive />
                <Link className="card-link" href={link}>Github</Link>
            </div>
        </div>
    )
}