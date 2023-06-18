import Image from "next/image"

export default function Projects( { name, description, techs, img, link } ){
    return (
        <div className="project-card">
            <div className="card-title">{name}</div>
            <div className="card-description">{description}</div>
            <div className="card-tech">{techs}</div>
            <Image src={img} alt="screengrab of colours" height={416} width={604}></Image>
            <div className="link">{link}</div>
        </div>
    )
}